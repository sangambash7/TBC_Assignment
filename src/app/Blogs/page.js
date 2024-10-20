import "./Blogs.css";
import Link from "next/link";

export default async function Blogs() {
  const getBlogs = async function () {
    const response = await fetch("https://dummyjson.com/posts");
    const data = await response.json();
    return data.posts;
  };

  const blogList = await getBlogs();

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
