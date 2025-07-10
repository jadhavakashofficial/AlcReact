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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main className="flex-grow pt-32 pb-16 max-w-3xl mx-auto px-4">
        {loading ? (
          <p className="text-center text-gray-200">Loading...</p>
        ) : post ? (
          <article className="prose lg:prose-lg max-w-none text-gray-200 bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
            <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt=""
                className="w-full h-auto mb-4 rounded-xl"
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
