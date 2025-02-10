'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [notification, setNotification] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (response.ok) {
      setNotification({
        type: 'success',
        message: 'Email sent successfully!',
      });
    } else {
      setNotification({
        type: 'error',
        message: 'Error sending email, please try again later.',
      });
    }
  };

  return (
    <div>
      <div className='py-4'>
        <Link href="/"><motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className='mx-auto flex items-center gap-2 md:px-4 md:py-2 py-2 px-3 bg-teal-500 rounded-3xl text-white w-fit'><FaArrowLeftLong/>Go back to home</motion.div></Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <main className="bg-white md:px-10 px-3">
          <section className="border-b-2">
            <div id="contact" className="lg:px-20 pb-24">
              <div>
                {/* Notification */}
                <div className='mb-4 lg:w-1/2 mx-auto text-white min-h-12'>
                  {notification && (
                    <div className={`p-4 rounded-md ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {notification.message}
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="lg:w-1/2 mx-auto bg-gray-100 p-8 rounded-md border-2 ">
                <div className='mb-4'>
                  <p className='text-2xl font-extrabold text-gray-800'>Get In Touch</p>
                </div>
                  <div className="lg:flex lg:gap-4">
                    <div className="mb-4 lg:flex-1">
                      <label className="block text-gray-700 font-bold mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-white p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>
                    <div className="mb-4 lg:flex-1">
                      <label className="block text-gray-700 font-bold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-white p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Subject</label>
                    <input
                      type='text'
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-white p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white p-3 w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    ></textarea>
                  </div>
                  <button className="bg-teal-600 hover:bg-teal-500 text-white py-2 px-4 rounded-md w-full font-bold"
                    disabled={loading}>
                      {loading ? <ImSpinner2 className='animate-spin inline-block'/> : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    </div>
  );
}
