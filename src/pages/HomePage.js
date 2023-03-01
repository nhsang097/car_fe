import React from 'react'
import { FeaturedProducts, Hero, Services, Contact,CarGallery,CarServices } from '../components'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      {/* <Services /> */}
      {/* <Contact /> */}
      <CarServices></CarServices>
      <CarGallery></CarGallery>
    </main>
  )
}

export default HomePage
