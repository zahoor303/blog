"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Welcome to the Food Blog</h1>
          <p className="text-lg mb-8">
            Discover recipes, tips, and stories that inspire your culinary
            adventures.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/posts">
              <a className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
                Explore Posts
              </a>
            </Link>
            <Link href="/about">
              <a className="bg-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-800 transition">
                Learn More
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: 1,
              title: "The Magic of Mediterranean Cuisine",
              image: "/images/1.png",
            },
            {
              id: 2,
              title: "Street Food Adventures",
              image: "/images/2.png",
            },
            {
              id: 3,
              title: "Comfort Food: The Universal Hug",
              image: "/images/3.png",
            },
          ].map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <a className="block bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-2">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600">
                    Explore the vibrant flavors and stories behind this
                    delicious cuisine.
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discover More Recipes?
          </h2>
          <p className="mb-6">
            Dive into the world of culinary adventures with our curated posts.
          </p>
          <Link href="/posts">
            <a className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition">
              Browse All Posts
            </a>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Food Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
