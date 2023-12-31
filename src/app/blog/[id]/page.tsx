"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

// Define the Post interface
interface Post {
  _id: string; // Change Number to string for _id
  title: string; // Change String to string for title and content
  content: string;
}

export default function BlogPage() {
  const url: string = process.env.NEXT_PUBLIC_URL || ''; // Access the URL variable correctly

  const path = usePathname();
  const _id = path.replace('/blog/', '');

  const [post, setPost] = useState<Post | null>(null); // Initialize as null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${url}${_id}`)
      .then((res) => res.json())
      .then((result) => {
        setPost(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching post", error);
        setLoading(false);
      });
  }, [_id, url]); // Include 'url' in the dependency array

  return (
    <div id="blog" className="box flex">
      <div className="blog-list m-3">
        {loading ? (
          <p>Loading...</p>
        ) : post ? ( // Check if post is not null
          <div>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        ) : (
          <p>Post not found.</p>
        )}
      </div>
    </div>
  );
}
