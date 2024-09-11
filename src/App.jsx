import React from 'react'
import Header from '/src/Header'
import Footer from './Footer';

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className='flex-grow'>
          <main>
            <Header/>
          </main>
        </div>
        <Footer/>
      </div>
    </>
  )
}
export default App;


