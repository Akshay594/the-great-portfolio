import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Big Bang Theory: A Celebration of Nerd Culture",
      content: "The Big Bang Theory revolutionized television by bringing science and nerd culture into mainstream entertainment. What makes this show special is its perfect blend of scientific accuracy and comedic timing. The characters, especially Sheldon Cooper, have become cultural icons. The show's ability to make complex scientific concepts accessible while maintaining humor is truly remarkable. It's not just a sitcom; it's a celebration of intelligence and the beauty of being different.",
      category: "TV Shows",
      date: "2024-03-15"
    },
    {
      id: 2,
      title: "Breaking Bad: The Art of Character Transformation",
      content: "Breaking Bad stands as a masterpiece in television history, primarily due to its exceptional character development. Walter White's transformation from a meek chemistry teacher to a drug kingpin is one of the most compelling character arcs ever written. The show's attention to detail, from the chemistry to the cinematography, creates an immersive experience. It's a study in how circumstances can change a person's moral compass and the consequences of those changes.",
      category: "TV Shows",
      date: "2024-03-10"
    },
    {
      id: 3,
      title: "The Psychology of Money: A Must-Read for Financial Wisdom",
      content: "Morgan Housel's 'The Psychology of Money' is a refreshing take on personal finance that focuses on behavior rather than numbers. The book teaches that financial success isn't about intelligence or technical knowledge, but about understanding human behavior and emotions. Through 19 short stories, Housel explains how our relationship with money is shaped by our experiences and psychology. It's a book that will change how you think about wealth, risk, and financial decisions.",
      category: "Books",
      date: "2024-03-05"
    }
  ];

  return (
    <div className="min-h-screen bg-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl text-cream mb-4">Writings</h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gold-muted"></div>
            <span className="font-accent italic text-gold-muted">reflections & musings</span>
            <div className="w-16 h-px bg-gold-muted"></div>
          </div>
        </div>
        
        <div className="space-y-8">
          {blogs.map((blog) => (
            <article 
              key={blog.id} 
              className="relative bg-dark-card border border-gold-muted/40 p-8"
            >
              <div className="absolute top-2 left-2 right-2 bottom-2 border border-gold/20 pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="font-display text-xs uppercase tracking-widest text-gold/50">{blog.category}</span>
                <span className="font-body text-sm text-cream/50">{blog.date}</span>
              </div>
              
              <h2 className="font-display text-2xl text-gold mb-4">{blog.title}</h2>
              <p className="font-body text-cream/60 leading-relaxed mb-6 line-clamp-3">{blog.content}</p>
              
              <Link
                to={`/blog/${blog.id}`}
                className="inline-flex items-center font-display text-sm uppercase tracking-widest text-cream/60 hover:text-gold transition-colors"
              >
                Continue Reading
                <span className="ml-2">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 