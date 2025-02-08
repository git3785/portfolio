"use client";
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

  // Handle form submission without an API call
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsLoading(true);
    setError("");
    setSuccessMessage("");

    // Simulate a delay (1 second) for form submission
    setTimeout(() => {
      // Simulate successful submission
      setSuccessMessage("Your message has been sent successfully!");
      setIsLoading(false);
    }, 1000);
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
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
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

