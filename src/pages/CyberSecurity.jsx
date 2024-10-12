import React from 'react'

function CyberSecurity() {
  return (
    <div>
         <div className="container mx-auto px-4 py-16">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Protect the Digital World</h1>
        <p className="text-lg text-gray-700 mb-6">
          Join our Cyber Security Program and become a guardian of the digital realm!
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Cyber Security?</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>High demand for cyber security professionals</li>
          <li>Competitive salaries and benefits</li>
          <li>Opportunities for advancement and specialization</li>
          <li>Protect individuals, businesses, and nations from cyber threats</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Cyber Security Program</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Network security and architecture</li>
          <li>Threat analysis and risk management</li>
          <li>Cryptography and encryption</li>
          <li>Incident response and disaster recovery</li>
          <li>Emerging trends: AI, IoT, and more</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Cyber Security Training Roadmap</h2>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Level 1: Foundations (3 months)</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Introduction to Cyber Security</li>
          <li>Network Fundamentals (TCP/IP, DNS)</li>
          <li>Operating System Security (Windows, Linux)</li>
          <li>Security Frameworks and Compliance</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Level 2: Intermediate (6 months)</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Threat Analysis and Risk Management</li>
          <li>Cryptography and Encryption</li>
          <li>Network Security Architecture</li>
          <li>Incident Response and Disaster Recovery</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Level 3: Advanced (9 months)</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Advanced Threat Analysis (AI, ML)</li>
          <li>Cloud Security (AWS, Azure)</li>
          <li>Cyber Security Analytics</li>
          <li>Security Orchestration and Automation</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Level 4: Specialization (3 months)</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Choose from: Penetration Testing, Security Consulting, or Incident Response</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Certifications</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>CompTIA Security+</li>
          <li>CompTIA Cybersecurity Analyst (CSA+)</li>
          <li>Certified Information Systems Security Professional (CISSP)</li>
          <li>Certified Ethical Hacker (CEH)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Our Program?</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Industry expert instructors</li>
          <li>Hands-on training and simulations</li>
          <li>Flexible learning options (online, offline)</li>
          <li>Career support and placement assistance</li>
          <li>Access to cyber security lab and equipment</li>
        </ul>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-800">Join the Cyber Security Revolution!</p>
          <p className="text-gray-700 mb-2">Contact us to learn more and enroll today!</p>
          <p className="text-gray-700">
            <strong>Email:</strong> cybersecurity@techeraafrica.com <br />
            <strong>Phone:</strong> 080 2263 2222
          </p>
          <a
            href="/brochure"
            className="mt-4 inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow hover:bg-blue-700"
          >
            Download Our Brochure
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default CyberSecurity