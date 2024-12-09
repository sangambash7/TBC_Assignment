import { getItems } from '../../_Services/getSupabaseData';
import Link from 'next/link';

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
    <main className="grid p-[15px] bg-main">
      <div className="relative">
        <h1 className="text-4xl grow text-center">List Of Blog Posts</h1>
      </div>
      <ul className="flex flex-col items-start list-none">
        {blogList &&
          blogList.map((blog) => (
            <li
              className="flex flex-col border w-full text-start my-2.5 ps-[5px] cursor-pointer"
              key={blog.id}
            >
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p className="text-gray-500 italic mt-[5px]">
                {blog.views} Views
              </p>

              <div className="flex gap-2 items-center my-[0.3rem]">
                <Link
                  className="text-inherit no-underline
"
                  href={`Blogs/${blog.id}`}
                >
                  View Blog
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </main>
  );
}
