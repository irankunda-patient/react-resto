import React from 'react'
import { About, Services, Contact, Footer, Hero } from './sections'
import Nav from './components/Nav'

const App = () => {
  return (
    <main className='relative bg-black-gradient padding'>
      <Nav />
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}

export default App
