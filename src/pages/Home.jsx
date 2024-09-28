import React from 'react'
import Hero from '../components/Hero'
import { FaTools, FaCloud, FaVrCardboard, FaCode, FaShieldAlt } from 'react-icons/fa';

function Home() {
    const programs = [
        // {
        //   title: 'DevOps',
        //   imgSrc: require('../images/python-programing.jpg'), // Replace with your image path
        //   description: 'Learn the principles and practices of DevOps to improve your workflow.',
        // },
        // {
        //   title: 'Cloud Computing',
        //   imgSrc: require('../images/cloud-computing.jpg'), // Replace with your image path
        //   description: 'Explore cloud service models and deployment strategies.',
        // },
        // {
        //   title: 'Virtual Reality Development',
        //   imgSrc: require('../images/virtual-reality.jpg'), // Replace with your image path
        //   description: 'Dive into the world of VR and learn to build immersive experiences.',
        // },
        // {
        //   title: 'Full Stack',
        //   imgSrc: require('../images/fullstack.jpg'), // Replace with your image path
        //   description: 'Master both front-end and back-end technologies to build complete applications.',
        // },
        // {
        //   title: 'Cyber Security',
        //   imgSrc: require('../images/cyber-security.jpg'), // Replace with your image path
        //   description: 'Understand the fundamentals of securing systems and networks.',
        // },
        {
          title: 'DevOps',
          icon: <FaTools className="text-6xl text-green-500" />, // Replace with DevOps icon
          description: 'Learn the principles and practices of DevOps to improve your workflow.',
        },
        {
          title: 'Cloud Computing',
          icon: <FaCloud className="text-6xl text-blue-500" />, // Replace with Cloud icon
          description: 'Explore cloud service models and deployment strategies.',
        },
        {
          title: 'Virtual Reality Development',
          icon: <FaVrCardboard className="text-6xl text-purple-500" />, // Replace with VR icon
          description: 'Dive into the world of VR and learn to build immersive experiences.',
        },
        {
          title: 'Full Stack',
          icon: <FaCode className="text-6xl text-orange-500" />, // Replace with Full Stack icon
          description: 'Master both front-end and back-end technologies to build complete applications.',
        },
        {
          title: 'Cyber Security',
          icon: <FaShieldAlt className="text-6xl text-red-500" />, // Replace with Cybersecurity icon
          description: 'Understand the fundamentals of securing systems and networks.',
        },
      ];
      
  return (
    <>
        <Hero/>
        <div className="bg-[#f9f9f9] py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-5">
                {/* Image with Rounded Edges */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        src={require('../images/illustration-hero.png')}  // Update with your image path
                        alt="Effective Learning"
                        className="rounded-lg w-3/4 h-auto" // Adjust size as needed
                    />
                </div>

                {/* Text Div */}
                <div className="w-full md:w-1/2 mt-8 md:mt-0 px-5 md:px-0">
                    <h2 className="text-2xl md:text-4xl  font-bold mb-4x font-montserrat">Effective and Convenient <br /> <span className='text-green-500'>Learning</span></h2>
                    <ul className="list-disc list-inside mt-4 font-montserrat">
                        <li className='mb-4'>Amazing Course Prices</li>
                        <li className='mb-4'>Cooperative Learning Community</li>
                        <li className='mb-4'>Multiple Student Earning Programs</li>
                        <li className='mb-4'>Active Instructor Support</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* <section className="py-10 bg-gray-100 px-24">
            <h2 className="text-4xl font-bold text-center mb-8">Our <span className='text-green-500'>Programs</span></h2>
            <div className="flex flex-wrap justify-center">
                {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md m-4 p-4 w-64">
                    <img src={program.imgSrc} alt={program.title} className="rounded-t-lg w-full h-32 object-cover" />
                    <h3 className="text-xl font-semibold mt-4">{program.title}</h3>
                    <p className="text-gray-600 mt-2">{program.description}</p>
                    <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                    Apply Now
                    </button>
                </div>
                ))}
            </div>
        </section> */}
        <section className="py-10 bg-gray-100 px-20 md:px-28">
          <h2 className="text-4xl font-bold text-center mb-8">
            Our <span className="text-green-500">Programs</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  {/* Icon centered */}
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold mt-4">{program.title}</h3>
                <p className="text-gray-600 mt-2">{program.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-10 px-2 md:px-4 flex justify-center items-center">
            <div className="text-center max-w-lg">
                {/* Large Heading */}
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Reach out to us
                </h2>

                {/* Subtext */}
                <p className="text-lg text-gray-600 mb-6">
                Please do not hesitate to reach out to us for any complaints, review, support, or clarification. Click the contact button below.
                </p>

                {/* Contact Us Button */}
                <button className="px-6 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300">
                Contact Us
                </button>
            </div>
        </section>
    </>
  )
}

export default Home