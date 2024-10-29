import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
   useState(0)

  return (
    <>
      <nav className='items-center shadow-md px-10 py-3 flex justify-between'>
        <div><img src="./vite.svg" alt="" /></div>
        <ul className='flex gap-5'>
          <li>link 1</li>
          <li>link 2</li>
          <li>link 3</li>
        </ul>
        <div className='flex gap-5 '>
          <a className='rounded-lg px-4 border-red border' href="">Login</a>
          <a className='rounded-lg px-4 bg-red' href="">SignUp</a>
        </div>
      </nav>
    </>
  )
}

export default App
