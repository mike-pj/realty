import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MinimumCost from './components/MinimumCost'
import ListProperties from './components/ListProperties'
import Flexibility from './components/Flexibility'
import Form from './components/Form'
import VideodProperty from './components/VideodProperty'
import Footer from './components/Footer'

function App() {
  
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
