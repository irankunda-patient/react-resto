import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-center py-6 border-t'>
      <h2 className="text-white font-montserrat">&copy; {new Date().getFullYear()} Stick&Fry Corner. All rights reserved</h2>
    </footer>
  )
}

export default Footer
