import { blogsData } from "./BlogsData";
import "./Blogs.css";

export default function Blogs() {
  return (
    <main className="blogs">
      <h1>List Of Blog Posts</h1>
      <ul>
        {blogsData.map((blog) => {
          return (
            <li key={blog.id}>
              <h3>{blog.name}</h3>
              <p className="blogs-date">{blog.date}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
