import React from "react"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-16">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">About IELTS Prep</h3>
          <p className="text-sm text-gray-400">
            IELTS Prep helps students prepare for IELTS with practice tests, 
            vocabulary tools, and AI-powered speaking feedback to achieve their dream scores.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition">Practice Tests</a></li>
            <li><a href="#" className="hover:text-white transition">Vocabulary Builder</a></li>
            <li><a href="#" className="hover:text-white transition">Progress Tracker</a></li>
            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <p className="text-sm text-gray-400">📍 Mumbai, India</p>
          <p className="text-sm text-gray-400">📧 support@ieltsprep.com</p>
          <p className="text-sm text-gray-400">📞 +91 98765 43210</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} IELTS Prep. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
