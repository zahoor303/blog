"use client";

import Navbar from "../components/navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
      <Navbar/>
      {/* Contact Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-pink-500 mb-6">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-800 mb-12">
          We'd love to hear from you! Whether you have questions, suggestions,
          or just want to say hello, feel free to reach out.
        </p>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-left text-gray-600 font-medium mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-gray-600 font-medium mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-left text-gray-600 font-medium mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-300 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-400 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Additional Contact Info */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Other Ways to Reach Us</h2>
          <p className="mb-6">
            You can also connect with us through our social media channels or
            email us directly.
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@foodblog.com"
                className="hover:underline"
              >
                info@foodblog.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +1 (123) 456-7890
            </li>
            <li>
              <strong>Follow Us:</strong>{" "}
              <a
                href="#"
                className="hover:underline"
              >
                Instagram
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="hover:underline"
              >
                Twitter
              </a>{" "}
              |{" "}
              <a
                href="#"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
