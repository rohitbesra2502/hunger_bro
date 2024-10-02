import React from 'react'
import Header from './component/Header'
import Landing_section from './component/Landing_section'
import Product from './component/Product'
import Footer from './component/Footer'
import Landing_service from './component/Landing_service'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <main>
            <Header />
            <Landing_section />
            <Product />
            <Landing_service/>
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App;


