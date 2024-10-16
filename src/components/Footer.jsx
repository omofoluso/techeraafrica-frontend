import React from 'react'

function Footer() {
  return (
    <footer className="border-t border-gray-300 py-4 px:5 md:px-28 bg-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        
        {/* Left: Copyright Text */}
        <p className="mb-2 md:mb-0">
          © TechEra Africa 2023. All Rights Reserved.
        </p>
        
        {/* Right: Links for Privacy Policy and Terms of Use */}
        <div className="flex space-x-4">
          <a href="/" className="hover:text-blue-500">Privacy Policy</a>
          <a href="/" className="hover:text-blue-500">Terms of Use</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer