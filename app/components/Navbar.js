import React from 'react'

function Navbar() {
  return (
    <nav className='bg-gray-900 text-white flex justify-between px-4 h-16 items-center'>
        <div className="logo bold text-lg">Get me a snack</div>
      <ul className='flex justify-between gap-4 '>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
