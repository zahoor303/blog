"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-blue-500 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          Welcome to the Food Blog! We're passionate about exploring diverse
          cuisines, sharing culinary stories, and inspiring your kitchen
          adventures.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img
            src="./logo.png"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 mb-6">
              At Food Blog, we aim to connect people through the universal love
              of food. From authentic recipes and street food discoveries to
              healthy eating and indulgent desserts, we celebrate the flavors
              that bring us together.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Why We Started
            </h2>
            <p className="text-gray-700">
              This blog was born out of a desire to document our food journey
              and share it with like-minded food enthusiasts. We believe that
              every dish tells a story, and we’re here to share those stories
              with you.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Join Us on This Culinary Adventure
          </h2>
          <p className="mb-6">
            Follow our blog for the latest recipes, tips, and stories that
            inspire your cooking journey.
          </p>
          <a
            href="/posts"
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition"
          >
            Explore Our Blog
          </a>
        </div>
      </section>
    </div>
  );
}
