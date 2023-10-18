"use client"

// components/Blog.tsx
import { useEffect, useState } from 'react';
import './blog.css'

interface BlogPost {
  _id: number;
  title: string;
  content: string;
}

async function fetchBlogPosts(): Promise<BlogPost[]> {
  const url: string = process.env.NEXT_PUBLIC_URL || '';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch blog posts');
    }
    return response.json();
  } catch (error) {
    throw new Error('Error fetching data: ' + error);
  }
}

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchBlogPosts();
        setBlogPosts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="blog" className="box">
      <div className="blog-list">
        <h1 className="text-5xl">Blog</h1>
        {loading ? (
          <p className="mt-5">Loading...</p>
        ) : (
          <ul>
            {blogPosts.map((content) => (
              <li key={content._id} className='ul_2'>
                <a href={`/blog/${content._id}`} target="_blank">{content.title}</a>
                <br />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
