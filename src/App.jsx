import React from 'react'
import Header from './component/Header'
import Landing_section from './component/Landing_section'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <main>
            <Header />
            <Landing_section />

          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App;


