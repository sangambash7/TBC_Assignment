"use client";
import { useEffect, useState } from "react";
import "./Blogs.css";
import Link from "next/link";

export default function Blogs() {
  const [blogList, setBlogList] = useState([]);

  const getBlogs = async function () {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    return data.posts;
  };

  useEffect(() => {
    const getBlogList = async function () {
      const blogs = await getBlogs();
      setBlogList(blogs);
      console.log(blogs);
    };

    getBlogList();
  }, []);

  return (
    <main className="blogs">
      <h1>List Of Blog Posts</h1>
      <ul>
        {blogList.map((blog) => {
          return (
            <Link className="blog-link" href={`/Blogs/${blog.id}`}>
              <li key={blog.id}>
                <h3>{blog.title}</h3>
                <p>{blog.body}</p>
                <p className="blogs-views">{blog.views} Views</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}

// export default function Blogs() {
//   return (
//     <main className="blogs">
//       <h1>List Of Blog Posts</h1>
//       <ul>
//         {blogsData.map((blog) => {
//           return (
//             <li key={blog.id}>
//               <h3>{blog.name}</h3>
//               <p className="blogs-date">{blog.date}</p>
//             </li>
//           );
//         })}
//       </ul>
//     </main>
//   );
// }
