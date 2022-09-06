import React from 'react'
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div>
      <motion.div 
       initial={{ opacity: 0, scale: 0.5 }}
       animate={{ opacity: 1, scale: 1 }}
       transition={{
         duration: 0.8,
         delay: 0.5,
         ease: [0, 0.71, 0.2, 1.01]
       }}
      className="position-relative  mt-5 mb-0 pb-1 d-flex justify-content-start">
      <h1 className='ms-5 f-5'> The Rick <span>&</span> Morty Characters</h1>
      </motion.div>
    </div>
  )
}

export default Header
