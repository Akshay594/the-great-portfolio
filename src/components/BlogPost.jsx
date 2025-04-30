import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Header from './Header';
import { Helmet } from 'react-helmet';

const blogs = [
  {
    id: 1,
    title: "The Big Bang Theory: A Celebration of Nerd Culture",
    content: "The Big Bang Theory revolutionized television by bringing science and nerd culture into mainstream entertainment. What makes this show special is its perfect blend of scientific accuracy and comedic timing. The characters, especially Sheldon Cooper, have become cultural icons. The show's ability to make complex scientific concepts accessible while maintaining humor is truly remarkable. It's not just a sitcom; it's a celebration of intelligence and the beauty of being different.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    category: "TV Shows",
    date: "2024-03-15"
  },
  {
    id: 2,
    title: "Breaking Bad: The Art of Character Transformation",
    content: "Breaking Bad stands as a masterpiece in television history, primarily due to its exceptional character development. Walter White's transformation from a meek chemistry teacher to a drug kingpin is one of the most compelling character arcs ever written. The show's attention to detail, from the chemistry to the cinematography, creates an immersive experience. It's a study in how circumstances can change a person's moral compass and the consequences of those changes.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80",
    category: "TV Shows",
    date: "2024-03-10"
  },
  {
    id: 3,
    title: "The Psychology of Money: A Must-Read for Financial Wisdom",
    content: "Morgan Housel's 'The Psychology of Money' is a refreshing take on personal finance that focuses on behavior rather than numbers. The book teaches that financial success isn't about intelligence or technical knowledge, but about understanding human behavior and emotions. Through 19 short stories, Housel explains how our relationship with money is shaped by our experiences and psychology. It's a book that will change how you think about wealth, risk, and financial decisions.",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    category: "Books",
    date: "2024-03-05"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-indigo-400 hover:text-indigo-300">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen">
      <Helmet>
        <title>{blog.title} | Blog</title>
        <meta name="description" content={blog.content.substring(0, 160)} />
      </Helmet>
      <Header />
      <main className="pt-28 pb-20 text-gray-300">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <Link to="/blog" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 mb-10">
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
          
          <article className="prose prose-xl prose-invert prose-indigo max-w-none space-y-14">
            <header className="mb-14">
              <h1 className="text-4xl sm:text-5xl font-bold text-indigo-300 mb-6">{blog.title}</h1>
              <div className="flex flex-wrap items-center text-gray-400 space-x-6">
                <div className="flex items-center">
                  <Calendar className="mr-2" size={16} />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center">
                  <User className="mr-2" size={16} />
                  <span>Gopal Singh</span>
                </div>
              </div>
            </header>

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-lg mb-8"
            />

            <section>
              <p className="text-xl text-indigo-200 font-semibold leading-relaxed">
                {blog.content}
              </p>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
