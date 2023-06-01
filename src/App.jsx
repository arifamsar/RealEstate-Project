import { useState } from 'react'
import Carousel from './components/Carousel'
import NavBar from './components/NavBar'
import MainSection from './components/MainSection'

function App() {
  return (
    <>
    {/* Header Section Start */}
    <NavBar/>
    {/* Header Section End */}
    {/* Hero Section Start */}
    <div className="lg:py-5">
    <Carousel />
    <div className='h-max max-w-full bg-teal-50 my-10 py-10'>
      <div className='w-full mx-auto text-center justify-center items-center'>
      <MainSection/>
      </div>
    </div>
    </div>
    {/* Hero Section End */}
    </>
  )
}

export default App
