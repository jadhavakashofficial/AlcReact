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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Header />
      <main className="flex-grow pt-32 pb-20 max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-100">Blogs</h1>
        {loading ? (
          <p className="text-center text-gray-200">Loading...</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const image =
                post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="block rounded-2xl bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:shadow-lg overflow-hidden transition"
                >
                  {image && (
                    <img
                      src={image}
                      alt=""
                      className="h-48 w-full object-cover rounded-t-2xl"
                    />
                  )}
                  <div className="p-4">
                    <h2 className="font-semibold text-lg mb-2 text-gray-100" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                    <div
                      className="text-sm text-gray-400"
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
