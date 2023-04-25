import React from 'react'
import{AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

function Footer() {
  return (
    <div className=' mt-64 pb-4 w-full flex justify-between items-center'>
        <div>
            <h1 className='text-white font-satoshi'>©By Lucho Grosso</h1>
        </div>
        <div className='flex items-center gap-2'>
            <a href="https://www.linkedin.com/in/luisgrosso-frontend/">
                <AiFillLinkedin size={33} className='text-white hover:text-violet-700' />
            </a>
            <a href="https://github.com/GrossoLuis">
                <AiFillGithub size={31} className='text-white hover:text-violet-700' />
            </a>
        </div>
    </div>
  )
}

export default Footer