import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className="mt-16 py-16 bg-gray-100">
      <div className="container mx-auto px-4 py-12 rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-900">Get in Touch</h2>

        <div className="flex flex-col items-center space-y-4 text-lg text-gray-700 mb-8">
          {/* Email */}
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-2xl text-blue-500" />
            <p>Contact us: <a href="mailto:contact@techeraafrica.com" className="text-blue-600 hover:underline">contact@techeraafrica.com</a></p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-2xl text-green-500" />
            <p><span className="font-semibold">Phone Number:</span> +234 809 440 2222</p>
          </div>

          {/* Address */}
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-2xl text-red-500" />
            <p><span className="font-semibold">Address:</span> Your Address Here</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center text-blue-900 mt-8">Let's Shape the Future of Tech Together</h3>
      </div>
    </section>

  )
}

export default Contact