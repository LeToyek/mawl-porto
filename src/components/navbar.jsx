import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900'>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <h1 className='font-bold text-white'>Mawl</h1>
        <div className="">
          <ul className='flex'>
            <li><a href="#" className='text-white block'>About</a></li>
            <li><a href="#" className='text-white block'>Projects</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar