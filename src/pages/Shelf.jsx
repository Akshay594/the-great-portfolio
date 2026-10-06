import { useState } from 'react';
import { ArchiveIntro } from './Notes';
import usePageMeta from '../lib/usePageMeta';
import { generalBooks, neuroscienceBooks, spiritualBooks, technicalBooks } from '../content/books';
import { animeShows, movies, tvShows } from '../content/shows';

// A filterable list of rated items. Used for both /books and /shows.
function Shelf({ path, title, intro, categories }) {
  usePageMeta(path);
  const [active, setActive] = useState(categories[0].name);
  const current = categories.find((category) => category.name === active);

  return (
    <>
      <ArchiveIntro title={title}>
        <p>{intro}</p>
      </ArchiveIntro>
      <section className="section section--flush pt-0" aria-labelledby="shelf-heading">
        <div className="wrap">
          <h2 id="shelf-heading" className="sr-only">
            {current.name}
          </h2>
          <div className="tabs mt-0" role="group" aria-label="Category">
            {categories.map((category) => (
              <button
                key={category.name}
                type="button"
                className="tab"
                aria-pressed={category.name === active}
                onClick={() => setActive(category.name)}
              >
                {category.name} <span className="meta">({category.items.length})</span>
              </button>
            ))}
          </div>
          <ul className="shelf m-0 mt-8 list-none border-t border-[color:var(--rule)] p-0">
            {current.items.map((item) => (
              <li key={item.title} className="shelf-item">
                <div className="flex items-baseline justify-between gap-4">
                  <h3>{item.title}</h3>
                  <span className="meta shrink-0">{item.rating}</span>
                </div>
                <p className="meta !mt-1">{item.author ? `${item.author} · ${item.genre}` : item.genre}</p>
                <p>{item.review}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export function Books() {
  return (
    <Shelf
      path="/books"
      title="Reading"
      intro="Books I have read and rated, from Vedanta to neuroscience to the classics of programming."
      categories={[
        { name: 'General', items: generalBooks },
        { name: 'Spiritual', items: spiritualBooks },
        { name: 'Technical', items: technicalBooks },
        { name: 'Neuroscience', items: neuroscienceBooks },
      ]}
    />
  );
}

export function Shows() {
  return (
    <Shelf
      path="/shows"
      title="Watching"
      intro="Series, anime and films I have watched and rated."
      categories={[
        { name: 'Series', items: tvShows },
        { name: 'Anime', items: animeShows },
        { name: 'Movies', items: movies },
      ]}
    />
  );
}
