import React from 'react'
import {
    Link
  } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-10 font-bold'>PL Poker</h1>
        <div className='flex justify-center items-center'>
            <Link to="/NewSession" className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                New Session
            </Link>
            <Link to="/JoinSession" className="border border-teal-500 bg-teal-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-teal-600 focus:outline-none focus:shadow-outline"> 
                Join Session
            </Link>
        </div>
    </div>
  )
}
