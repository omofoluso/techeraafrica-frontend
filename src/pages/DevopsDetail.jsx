import React from 'react'

function DevopsDetail() {
  return (
    <div>
         <div className="container mx-auto px-4 py-16">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-4">Unlock the Power of DevOps: Transform Your Career!</h1>
        <p className="text-lg text-gray-700 mb-6">
          DevOps, a blend of development and operations, has revolutionized the software industry. It fosters collaboration,
          automation, and continuous delivery, leading to faster time-to-market, improved product quality, and enhanced customer satisfaction.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why DevOps?</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>High demand: DevOps professionals are in high demand across industries.</li>
          <li>Career growth: Enhance your skills and advance your career.</li>
          <li>Competitive salary: DevOps experts earn attractive salaries.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our DevOps Program</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Comprehensive curriculum: Covering DevOps fundamentals, automation, CI/CD, and more.</li>
          <li>Hands-on training: Practical experience with industry-standard tools.</li>
          <li>Expert instructors: Guided learning from experienced DevOps professionals.</li>
          <li>Real-world projects: Apply DevOps concepts to real-world scenarios.</li>
          <li>Certification support: Prepare for industry-recognized certifications.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">DevOps Training Roadmap</h2>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Level 1: Foundations (6 weeks)</h3>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Introduction to DevOps</li>
          <li>Agile and Scrum</li>
          <li>Version Control Systems (Git)</li>
          <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
          <li>UNIX/Linux Overview</li>
          <li>Windows OS</li>
          <li>Systems Installation and Management</li>
          <li>Network Management</li>
          <li>Virtualization and Web Hosting</li>
          <li>Security and Data Center Management</li>
          <li>Policies and Best Practices</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">Level 2: Advanced DevOps Engineering (8 weeks)</h3>
        <h4 className="text-lg font-semibold text-gray-700 mb-1">Automation and IaC (4 weeks)</h4>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Scripting (Python, PowerShell, Bash)</li>
          <li>Configuration Management – Vagrant | Ansible | Chef</li>
          <li>Infrastructure as Code with Terraform</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-700 mb-1">Containerization and Orchestration</h4>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-700 mb-1">CI/CD</h4>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Jenkins</li>
          <li>GitLab</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-700 mb-1">Monitoring and Observability</h4>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Prometheus and Grafana</li>
          <li>ELK</li>
          <li>APM</li>
          <li>Commercial Tools</li>
        </ul>

        <h4 className="text-lg font-semibold text-gray-700 mb-1">Cloud DevOps</h4>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>AWS and Azure</li>
        </ul>

        <div className="mt-8 text-center">
          <p className="text-lg font-semibold text-gray-800">Join Our DevOps Program Today!</p>
          <p className="text-gray-700">Contact us to learn more.</p>
          <p className="text-gray-700">
            <strong>Email:</strong> infos@techeraafrica.com <br />
            <strong>Phone:</strong> 080 22 63 2222
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

export default DevopsDetail