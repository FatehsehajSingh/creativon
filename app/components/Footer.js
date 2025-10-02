import React from 'react'

function Footer() {
  const currentYear =new Date().getFullYear()
  return (

    <footer className='bg-gray-900 text-white flex justify-center px-4 h-16 items-center'>
      <p className='text-center'>Copyright &copy;{currentYear}  Creativon-All rights reserved</p>
    </footer>
  )
}

export default Footer
