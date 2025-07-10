import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          'https://thealcworld.in/store/wp-json/wp/v2/posts?_embed&per_page=20'
        );
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (err) {
        console.error('Failed to load posts', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="flex-grow max-w-5xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Blogs</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition"
                >
                  {image && (
                    <img
                      src={image}
                      alt=""
                      className="h-48 w-full object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="font-semibold text-lg mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div
                      className="text-sm text-gray-600"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
