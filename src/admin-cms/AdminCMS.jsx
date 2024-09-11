import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminCMS = ({ token }) => {
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', slug: '', content: '', status: 'draft' });
  const [isEditing, setIsEditing] = useState(false);

  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    const axiosConfig = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    axios.get('http://localhost:8000/blogs/', axiosConfig)
      .then(response => setBlogs(response.data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, [token]);
  

  // Fetch blogs
  // useEffect(() => {
  //   axios.get('http://localhost:8000/blogs/', axiosConfig)
  //     .then(response => setBlogs(response.data))
  //     .catch(error => console.error('Error fetching blogs:', error));
  // }, [token]);

  // Create or update blog
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const blogData = {
      title: form.title,
      slug: form.slug,
      content: form.content,
      status: form.status,
    };

    if (isEditing) {
      // Update blog (PUT request)
      axios.put(`http://localhost:8000/blogs/${form.slug}`, blogData, axiosConfig)
        .then(response => {
          setBlogs(blogs.map(blog => (blog.slug === form.slug ? response.data : blog)));
          resetForm();
        })
        .catch(error => console.error('Error updating blog:', error));
    } else {
      // Create new blog (POST request)
      axios.post('http://localhost:8000/blogs/', blogData, axiosConfig)
        .then(response => {
          setBlogs([...blogs, response.data]);
          resetForm();
        })
        .catch(error => console.error('Error creating blog:', error));
    }
  };

  // Edit blog
  const handleEdit = (blog) => {
    setForm(blog);
    setIsEditing(true);
  };

  // Delete blog
  const handleDelete = (slug) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      axios.delete(`http://localhost:8000/blogs/${slug}`, axiosConfig)
        .then(() => {
          setBlogs(blogs.filter(blog => blog.slug !== slug));
        })
        .catch(error => console.error('Error deleting blog:', error));
    }
  };

  const resetForm = () => {
    setForm({ title: '', slug: '', content: '', status: 'draft' });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold mb-6">Admin CMS</h2>
      
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-lg mb-8">
        <h3 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Blog' : 'Create New Blog'}</h3>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
          className="w-full p-2 mb-4 rounded bg-gray-700"
        />
        <input
          type="text"
          placeholder="Slug"
          value={form.slug}
          onChange={(e) => setForm({ ...form, slug: e.target.value })}
          required
          disabled={isEditing}
          className="w-full p-2 mb-4 rounded bg-gray-700"
        />
        <textarea
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          required
          className="w-full p-2 mb-4 rounded bg-gray-700"
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="w-full p-2 mb-4 rounded bg-gray-700"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
          <option value="modified">Modified</option>
        </select>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded" type="submit">
          {isEditing ? 'Update Blog' : 'Create Blog'}
        </button>
        {isEditing && (
          <button
            className="ml-4 bg-gray-500 hover:bg-gray-600 text-white p-2 rounded"
            onClick={resetForm}
            type="button"
          >
            Cancel
          </button>
        )}
      </form>

      <h3 className="text-2xl font-semibold mb-4">Manage Blogs</h3>
      {['published', 'draft', 'modified'].map(status => (
        <div key={status} className="mb-6">
          <h4 className="text-xl font-semibold mb-2 capitalize">{status} Blogs</h4>
          {blogs.filter(blog => blog.status === status).map(blog => (
            <div key={blog.slug} className="bg-gray-800 p-4 rounded mb-2 flex justify-between items-center">
              <div>
                <h5 className="text-lg font-semibold">{blog.title}</h5>
                <p className="text-sm text-gray-400">/{blog.slug}</p>
              </div>
              <div>
                <button className="text-blue-400 hover:text-blue-300 mr-4" onClick={() => handleEdit(blog)}>Edit</button>
                <button className="text-red-400 hover:text-red-300" onClick={() => handleDelete(blog.slug)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminCMS;
