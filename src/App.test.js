import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { publications } from './content/site';

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('homepage has one h1 and the core sections', () => {
  renderAt('/');
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Founder. Engineer. AI researcher.');
  for (const name of ['What I’m building', 'Research', 'Systems I’ve worked on', 'Writing', 'About', 'Get in touch']) {
    expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
  }
});

test('all four papers are listed newest first with arXiv links and original author order', () => {
  renderAt('/');
  const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent);
  const paperTitles = titles.filter((t) => publications.some((p) => p.title === t));
  expect(paperTitles).toEqual(publications.map((p) => p.title));

  for (const paper of publications) {
    const article = screen.getByRole('heading', { name: paper.title }).closest('article');
    expect(within(article).getByRole('link', { name: paper.title })).toHaveAttribute(
      'href',
      `https://arxiv.org/abs/${paper.arxivId}`
    );
    expect(within(article).getByText(/Vishal Pandey/).textContent).toBe(`Authors: ${paper.authors.join(', ')}`);
  }
});

test('research page shows expanded details for every paper', () => {
  renderAt('/research');
  expect(screen.getByRole('heading', { level: 1, name: 'Research' })).toBeInTheDocument();
  expect(screen.getAllByText('Reported result')).toHaveLength(4);
  expect(screen.getByText(/99\.20%/)).toBeInTheDocument();
});

test('mobile menu opens, closes with Escape and returns focus to the toggle', () => {
  renderAt('/');
  const toggle = screen.getByRole('button', { name: 'Menu' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  const menu = document.getElementById('mobile-nav');
  expect(within(menu).getAllByRole('link')).toHaveLength(5);
  expect(document.activeElement).toBe(within(menu).getByRole('link', { name: 'Work' }));
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(document.getElementById('mobile-nav')).toBeNull();
  expect(document.activeElement).toBe(toggle);
});

test('legacy routes still resolve', () => {
  renderAt('/blog/2');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Breaking Bad');
});

test('unknown routes show the 404 page', () => {
  renderAt('/does-not-exist');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('This page doesn’t exist.');
});

test('profile links use the theunblunt handle and no old GitHub work is linked', () => {
  renderAt('/');
  const hrefs = [...document.querySelectorAll('a')].map((a) => a.getAttribute('href'));
  expect(hrefs).toContain('https://x.com/theunblunt');
  expect(hrefs).toContain('https://www.instagram.com/theunblunt/');
  expect(hrefs.some((h) => /Akshay594|unblunttheory$/.test(h || '') && !h.includes('youtube'))).toBe(false);
});
