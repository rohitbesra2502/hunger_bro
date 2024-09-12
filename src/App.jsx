import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <main>
            <Header />

            
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default App;


