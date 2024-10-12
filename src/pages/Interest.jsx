import React, { useEffect } from 'react'
import Forms from '../components/Forms'
import AOS from "aos";
import "aos/dist/aos.css";

function Interest() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in milliseconds
    });
  }, []);
  return (
    <div className='mt-20 flex flex-col justify-center'>
      {/* Add your Google Forms URL here */}
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd-Xgvt7CJO1MvYfUuUbQh2Lbfy7CLte1mss9iAyOArcqKCjQ/viewform?embedded=true" width="640" height="1946" frameborder="0" marginheight="0" marginwidth="0" title='interest-form'>Loading…</iframe> */}
        <div class="relative h-[50vh]">
            {/* <!-- Background Image --> */}
            <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${require('../images/hands-5302566_1280.jpg')})` }}>
                {/* <!-- Green Overlay --> */}
                <div class="absolute inset-0 bg-green-400 bg-opacity-50"></div>
            </div>


            {/* <!-- Content Over Image --> */}
            <div class="relative z-10 flex items-center justify-center h-full text-center">
                <h1 class="text-white text-4xl font-bold">Unlock Global Internship Opportunities with Us</h1>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center mt-10 md:mt-16 gap-10'>
          <div data-aos="zoom-in" className='w-full md:w-[40%] mt-[20px] px-5 md:p-0'>
            <h2 className='text-2xl md:text-4xl font-bold mb-5 md:mb-10'>Welcome to TechEraAfrica!</h2>
            <p className='text-base md:text-lg'>Register your interest and be one of the first to apply. Get ready to join the TechEraAfrica community and gain the building blocks to prepare you for opportunities within our global ecosystem of internship partners. Your future in tech has never looked so bright!</p>
          </div>
          <div className='w-full md:w-[40%] p-5'>
            <Forms/>
          </div>
            
        </div>

    </div>
  )
}

export default Interest