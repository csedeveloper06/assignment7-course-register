import { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards'
import Cart from './components/Cart/Cart'



function App() {


  return (
    <>
      <div className='flex justify-evenly'>
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
