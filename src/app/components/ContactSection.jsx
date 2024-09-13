"use client"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from 'react-toastify'; 
import { useState } from 'react';
import axios from 'axios';
import Link from "next/link";
export default function ContactSection() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage(null);

    try {
      const res = await axios.post('/api/send', {
        to: email,
        subject,
        text: message,
      });

      if (res.status === 200) {
        // Clear the form fields after successful submission
        setEmail('');
        setSubject('');
        setMessage('');
        // Show success message
        toast.success('Your request was sent successfully!');
      } else {
        toast.error(`Error: ${res.data.message}`);
      }
    } catch (error) {
      setResponseMessage(
        error.response?.data?.message || 'An error occurred while sending the message.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left part: Heading, Paragraph, and Social Icons */}
        <div className="flex flex-col justify-center">
  <h4 className="text-4xl font-bold mb-4">Get in Touch</h4>
  <p className="mb-6 text-lg">
    Feel free to reach out for collaborations or just a friendly chat.
  </p>
  <div className="flex space-x-6">
    <a href="https://www.linkedin.com/in/simran-mansuri-55b141207/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faLinkedin}
        style={{ width: "30px" }}
        className="text-white text-base sm:text-lg md:text-sm lg:text-2xl"
      />
    </a>
    <a href="https://github.com/tech-simran" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faGithub}
        style={{ width: "30px" }}
        className="text-white text-base sm:text-lg md:text-xl lg:text-2xl"
      />
    </a>
  </div>
</div>


        {/* Right part: Contact Form */}
        <div className="p-8 rounded-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 focus:outline-none focus:ring-2 focus:ring-gray-800 block w-full px-4 py-2 bg-[#18191E] border-[#33353F]  text-grey-100 rounded-md"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="mt-1 block w-full px-4 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none bg-[#18191E] border-[#33353F]  text-grey-100 rounded-md"
            placeholder="Enter subject"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-[#18191E] border-[#33353F]  text-grey-100 rounded-md"
            placeholder="Your message..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-600 hover:bg-blue-700 rounded-md font-medium text-white focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>

   
   
    </div>     
     </div>
    </section>
  );
}
