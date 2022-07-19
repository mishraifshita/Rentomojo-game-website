import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
      <div className="">
          <img className="h-full md:h-screen w-full" src="./images/banner.jpg" alt="" />
          <div className="absolute top-1/4 sm:top-1/3 md:top-1/2 left-12 space-y-4">
              <p className="text-4xl md:text-8xl font-bold p-4 bg-black text-purple-800">Rentomojo Game</p>
              <Link to="/all-games">
              <p className="py-2 my-2 px-4 w-36 flex items-center justify-center cursor-pointer text-white font-bold bg-purple-800 rounded hover:bg-purple-900">All Games</p>
              </Link>
          </div>
      </div>
  )
}

export default Hero