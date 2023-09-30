"use client"
import { useEffect, useState } from 'react';

export async function getData() {
  const res = await fetch('http://localhost:9090/data/post');
  return res.json();
}

interface BlogPosts {
  _id: Number,
  title: String,
  content: String
}

export default function Blog() {
  const [data, setData] = useState<BlogPosts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div id="blog" className="box flex">
      <div className="blog-list">
        <h1 className="text-5xl">Blog</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className='flex'>
            {data.map((content) => (
              <li key={content._id}><a href={`/blog/${content._id}`}>{content.title}</a></li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
