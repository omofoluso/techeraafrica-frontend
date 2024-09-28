import React from 'react'
import { FaUniversalAccess, FaLightbulb, FaUsers, FaCheckCircle, FaChartLine,  FaLaptopCode, FaChalkboardTeacher, FaBuilding, FaUserGraduate } from 'react-icons/fa';

function About() {
  return (
    <section className="mt-16 py-16 bg-gray-100 md:px-28">
      <div className="container mx-auto px-8 lg:px-16">
        {/* About Us Heading */}
        <h2 className="text-5xl font-bold text-center mb-10 text-blue-900">About Us</h2>
    
        {/* Introduction Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            At Techera, we're passionate about bridging the tech skills gap and fostering a community of innovators. Our mission is to provide accessible, high-quality tech education, empowering individuals and organizations to thrive in the digital age.
          </p>
        </div>
    
        {/* Our Story Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          {/* Image (Optional) */}
          <div className="hidden md:w-1/2 md:ml-12 mt-8 md:mt-0 md:flex justify-center">
            <img src={require('../images/about-us-illustration.jpg')} alt="Our Story" className="rounded-lg shadow-lg w-4/5 h-fit"/>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-blue-900 mb-4">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in 2023 by Folu Sogbesan and Fola Oladipupo, Techera Digital Hub under the trade name Techera Africa was born out of a shared vision to make tech education inclusive, engaging, and effective.
            </p>
          </div>
        </div>
    
        {/* Our Values Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-3xl font-semibold text-blue-900 text-center mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
          {/* Accessibility */}
          <div className="text-center flex flex-col items-center">
            <div className="mb-4">
              <FaUniversalAccess className="text-4xl text-green-500" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Accessibility</h4>
            <p className="text-gray-600">Tech education for all, regardless of background or location.</p>
          </div>

          {/* Innovation */}
          <div className="text-center flex flex-col items-center">
            <div className="mb-4">
              <FaLightbulb className="text-4xl text-green-500" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Innovation</h4>
            <p className="text-gray-600">Staying cutting-edge to ensure our learners receive the latest industry insights.</p>
          </div>

          {/* Community */}
          <div className="text-center flex flex-col items-center">
            <div className="mb-4">
              <FaUsers className="text-4xl text-green-500" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Community</h4>
            <p className="text-gray-600">Fostering collaboration, support, and networking opportunities.</p>
          </div>

          {/* Quality */}
          <div className="text-center flex flex-col items-center">
            <div className="mb-4">
              <FaCheckCircle className="text-4xl text-green-500" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Quality</h4>
            <p className="text-gray-600">Delivering engaging, interactive, and informative learning experiences.</p>
          </div>

          {/* Impact */}
          <div className="text-center flex flex-col items-center">
            <div className="mb-4">
              <FaChartLine className="text-4xl text-green-500" />
            </div>
            <h4 className="text-xl font-semibold mb-2">Impact</h4>
            <p className="text-gray-600">Measuring success by the careers we transform and the innovation we inspire.</p>
          </div>
        </div>
        </div>
    
        {/* Our Offerings Section */}
        <div className="bg-gray-200 rounded-lg shadow-md p-8 mb-12">
          <h3 className="text-3xl font-semibold text-blue-900 text-center mb-8">Our Offerings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Online Courses and Certifications */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-4">
                <FaLaptopCode className="text-4xl text-green-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Online Courses & Certifications</h4>
              <p className="text-gray-700 text-lg">
                DevOps, Cloud Computing, Cybersecurity, Virtual Reality Development, and Fullstack.
              </p>
            </div>

            {/* Workshops, Bootcamps, and Hackathons */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-4">
                <FaChalkboardTeacher className="text-4xl text-green-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Workshops, Bootcamps & Hackathons</h4>
              <p className="text-gray-700 text-lg">
                Interactive learning experiences and hands-on practice in cutting-edge tech areas.
              </p>
            </div>

            {/* Customized Corporate Training */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-4">
                <FaBuilding className="text-4xl text-green-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Customized Corporate Training</h4>
              <p className="text-gray-700 text-lg">
                Tailored solutions to meet the specific tech needs of organizations.
              </p>
            </div>

            {/* Mentorship & Career Guidance */}
            <div className="text-center flex flex-col items-center">
              <div className="mb-4">
                <FaUserGraduate className="text-4xl text-green-500" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Mentorship & Career Guidance</h4>
              <p className="text-gray-700 text-lg">
                Personalized mentorship to help guide learners through their career journey.
              </p>
            </div>
      
          </div>
        </div>
    
        {/* Meet Our Team Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-blue-900 mb-8">Meet Our Team</h3>
          <p className="text-lg text-gray-700 mb-12">More details about our team will be available soon!</p>
        </div>
    
        {/* Call to Action */}
        <div className="text-center mt-10">
          <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300">
            Join Our Community
          </button>
        </div>
      </div>
  </section>
  
  )
}

export default About