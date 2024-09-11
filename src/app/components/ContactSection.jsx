// components/ContactSection.js
// import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className=" text-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left part: Heading, Paragraph, and Social Icons */}
        <div className="flex flex-col justify-center">
          <h4 className="text-4xl font-bold mb-4">Get in Touch</h4>
          <p className="mb-6 text-lg">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          {/* <div className="flex space-x-6">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub size={30} />
            </a>
          </div> */}
        </div>

        {/* Right part: Contact Form */}
        <div className=" p-8 rounded-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 focus:outline-none focus:ring-2  focus:ring-gray-800 block w-full px-4 py-2 bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-grey-100 rounded-md "
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                  className="mt-1 block w-full px-4 py-2 focus:ring-2  focus:ring-gray-800 focus:outline-none bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-grey-100 rounded-md "
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                 className="mt-1 block w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800 bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-grey-100 rounded-md "
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gradient-to-r  from-purple-400 to-pink-600 hover:bg-blue-700 rounded-md font-medium text-white focus:outline-none "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


