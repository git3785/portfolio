"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const EmailSection = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, subject, message }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const data = await response.json();
      setSuccessMessage(data.message); // Success message from API
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

      {/* Left Side: Intro and Social Links */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com" target="_blank">
            <Image src="/git.png" alt="Github Icon" width={24} height={24} />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <Image src="/linkdin.png" alt="Linkedin Icon" width={24} height={24} />
          </Link>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Contact Me</h5>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md border border-[#555] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 rounded-md border border-[#555] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="p-3 rounded-md border border-[#555] bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white py-3 px-6 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
