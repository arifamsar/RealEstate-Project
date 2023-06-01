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
    <div className='h-max max-w-full bg-teal-50 lg:mt-10 mb-0 py-5'>
      <div>
      <MainSection/>
      </div>
    </div>
    </div>
    {/* Hero Section End */}
    </>
  )
}

export default App
