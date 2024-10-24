"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./Blogs.css";
import BlogModal from "../_Components/BlogModal/BlogModal";

export default function Blogs() {
  const [blogList, setBlogList] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: "", body: "" });
  const [editBlog, setEditBlog] = useState(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const fetchDataAndSaveToLocalStorage = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    const blogs = data.posts;

    localStorage.setItem("blogs", JSON.stringify(blogs));
    setBlogList(blogs);
  };

  const loadFromLocalStorage = () => {
    const savedBlogs = localStorage.getItem("blogs");
    if (savedBlogs) {
      setBlogList(JSON.parse(savedBlogs));
    } else {
      fetchDataAndSaveToLocalStorage();
    }
  };

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const saveToLocalStorage = (updatedBlogs) => {
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogList(updatedBlogs);
  };

  const createBlog = () => {
    const highestId =
      blogList.length > 0 ? Math.max(...blogList.map((blog) => blog.id)) : 0;
    const newBlogPost = {
      id: highestId + 1,
      title: newBlog.title,
      body: newBlog.body,
      views: 0,
    };
    const updatedBlogs = [newBlogPost, ...blogList];
    saveToLocalStorage(updatedBlogs);
    setNewBlog({ title: "", body: "" });
    setIsCreateModalOpen(false);
  };

  const updateBlog = () => {
    const updatedBlogs = blogList.map((blog) =>
      blog.id === editBlog.id
        ? { ...blog, title: editBlog.title, body: editBlog.body }
        : blog
    );
    saveToLocalStorage(updatedBlogs);
    setEditBlog(null);
    setIsEditModalOpen(false);
  };

  const deleteBlog = (id) => {
    const updatedBlogs = blogList.filter((blog) => blog.id !== id);
    saveToLocalStorage(updatedBlogs);
  };

  const toggleCreateModal = () => {
    setIsCreateModalOpen(!isCreateModalOpen);
  };

  const toggleEditModal = (blog) => {
    setEditBlog(blog);
    setIsEditModalOpen(true);
  };

  return (
    <main className="blogs">
      <h1>List Of Blog Posts</h1>

      <button onClick={toggleCreateModal}>Create Post</button>

      {/* Create Blog Modal */}
      <BlogModal
        isOpen={isCreateModalOpen}
        onClose={toggleCreateModal}
        title={newBlog.title}
        body={newBlog.body}
        setTitle={(title) => setNewBlog({ ...newBlog, title })}
        setBody={(body) => setNewBlog({ ...newBlog, body })}
        onSubmit={createBlog}
        action="create"
      />

      {/* Edit Blog Modal */}
      {isEditModalOpen && editBlog && (
        <BlogModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          title={editBlog.title}
          body={editBlog.body}
          setTitle={(title) => setEditBlog({ ...editBlog, title })}
          setBody={(body) => setEditBlog({ ...editBlog, body })}
          onSubmit={updateBlog}
          action="edit"
        />
      )}

      <ul>
        {blogList.map((blog) => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <p className="blogs-views">{blog.views} Views</p>

            <div className="blog-actions">
              <button onClick={() => toggleEditModal(blog)}>Edit</button>
              <button onClick={() => deleteBlog(blog.id)}>Delete</button>
              <Link className="blog-link" href={`/Blogs/${blog.id}`}>
                View Blog
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
