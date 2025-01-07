'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeftLong } from "react-icons/fa6";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

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
      <div className='py-10'>
        <Link href="/"><motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className='mx-auto flex items-center gap-2 lg:px-4 lg:py-2 py-1 px-2 bg-teal-500 rounded-3xl text-white w-fit'><FaArrowLeftLong/>Go back to home</motion.div></Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <main className="bg-white px-10">
          <section className="border-b-2">
            <div id="contact" className="lg:px-20 pb-24">
              <div className='border-b-2'>
              <h3 className="text-4xl lg:text-6xl py-5 md:mb-5 font-bold text-teal-700 text-center">Contact me</h3>
              </div>
              <div>
                {/* Notification */}
                <div className='mb-4 lg:w-1/2 mx-auto text-white min-h-12'>
                  {notification && (
                    <div className={`p-4 rounded-md ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {notification.message}
                    </div>
                  )}
                </div>
                <form onSubmit={handleSubmit} className="lg:w-1/2 mx-auto">
                  <label className="block">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-200 p-2.5 w-full rounded-md mb-4"
                    placeholder="John Doe"
                    required
                  />
                  <label className="block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-200 p-2.5 w-full rounded-md mb-4"
                    placeholder="john@email.com"
                    required
                  />
                  <label className="block">Subject</label>
                  <input
                    type='text'
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-slate-200 p-2.5 w-full rounded-md mb-4"
                    required
                  />
                  <label className="block">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-slate-200 p-2.5 w-full rounded-md mb-4"
                    required
                  ></textarea>
                  <button className="bg-teal-600 hover:bg-teal-500 text-white py-1.5 px-4 rounded-md w-full">
                    Submit
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
