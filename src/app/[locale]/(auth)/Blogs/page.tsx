import { getItems } from '../../_Services/getSupabaseData';
import Link from 'next/link';
import './Blogs.css';

type localeType = 'en' | 'ge';

interface BlogsProps {
  params: {
    locale: localeType;
  };
}

export default async function Blogs({ params }: BlogsProps) {
  const lang = params.locale;
  const blogList = await getItems('Blogs', lang);

  return (
    <main className="blogs">
      <div className="blogs-header">
        <h1>List Of Blog Posts</h1>
      </div>
      <ul>
        {blogList &&
          blogList.map((blog) => (
            <li key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p className="blogs-views">{blog.views} Views</p>

              <div className="blog-actions">
                <Link className="blog-link" href={`Blogs/${blog.id}`}>
                  View Blog
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
