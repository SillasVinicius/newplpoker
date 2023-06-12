import React from 'react'
import {
  Link
} from 'react-router-dom'

export default function JoinSession() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
        <h1 className='text-3xl mb-10 font-bold'>PL Poker</h1>
        <h1 className='text-xl font-bold'>Join Session</h1>

        <Link to="/" className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">Voltar</Link>
    </div>
  )
}
