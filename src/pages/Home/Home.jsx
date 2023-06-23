import React from 'react'
import {
    Link
  } from 'react-router-dom'

export default function Home() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-10 font-bold'>PL Poker</h1>
        <div className='flex gap-2'>
            <Link
              to="/NewSession"
              className="flex justify-center rounded-md bg-teal-900 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-900"
            >
              New Session
            </Link>
            <Link
              to="/JoinSession"
              className="flex justify-center rounded-md bg-teal-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
            >
              Join Session
            </Link>
        </div>
    </div>
  )
}
