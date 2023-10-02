
// components/Blog.tsx
"use client"
import { useEffect, useState } from 'react';

interface BlogPost {
  _id: number;
  title: string;
  content: string;
}


async function fetchBlogPosts(): Promise<BlogPost[]> {
  const url:string = process.env.NEXT_PUBLIC_URL || ''; // Access the URL variable correctly

  console.log("Url is " + url);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBlogPosts();
        setBlogPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="blog" className="box flex">
      <div className="blog-list">
        <h1 className="text-5xl">Blog</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {blogPosts.map((content) => (
              <li key={content._id}>
                <a href={`/blog/${content._id}`}>{content.title}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
