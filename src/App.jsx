import React from 'react'
import './App.css'
import Header from './components/Header'
import MinimumCost from './components/MinimumCost'
import ListProperties from './components/ListProperties'
import Flexibility from './components/Flexibility'
import Form from './components/Form'
import VideodProperty from './components/VideodProperty'
import Footer from './components/Footer'
import AOS from 'aos'
import "aos/dist/aos.css"

function App() {

  React.useEffect(() => {
    AOS.init(
      {
        duration: 900,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100,
      }
    );
    AOS.refresh();
  }, []);
  
  return (
    <>
      <div className="">
          <Header />
          <MinimumCost />
          <ListProperties />
          <Flexibility />
          <Form />
          <VideodProperty />
          <Footer />
      </div>
    </>
  )
}

export default App
