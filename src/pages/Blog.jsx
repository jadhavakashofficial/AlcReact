import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

export default function Blog() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://thealcworld.in/store/wp-json/wp/v2/posts/${id}?_embed`
        );
        if (res.ok) {
          const data = await res.json();
          setPost(data);
        }
      } catch (err) {
        console.error('Failed to load post', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="flex-grow max-w-3xl mx-auto p-4">
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : post ? (
          <article className="prose lg:prose-lg max-w-none">
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt=""
                className="w-full h-auto mb-4"
              />
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </article>
        ) : (
          <p className="text-center">Post not found.</p>
        )}
      </main>
      <Footer />
    </div>
  );
}
