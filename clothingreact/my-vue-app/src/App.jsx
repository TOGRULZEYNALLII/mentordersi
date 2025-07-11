import { useState } from 'react'
import {router } from 'react-router-dom'
import './App.css'
import Header from './Header/Header'
import Main from './Main/Main'
import SectionImages from './Sectionimages/SectionImages'
import Footer from './Footer/Footer'

function Nese(){
  const [count, setCount] = useState(0)
  console.log("salam bu nese funksiyasidir")
}
function App() {
  return (
    <>
      <Header />
      <Main />
      <SectionImages />
      <Footer />
    </>
  ) 
}

export { App as default, Nese }
