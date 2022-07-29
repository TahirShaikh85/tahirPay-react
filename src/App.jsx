import React from 'react'
import Home from './Pages/Home';
import { Route,Routes } from 'react-router-dom';
import About from './Pages/About';
import ServicesPage from './Pages/Services';
import ContactPage from './Pages/Contact'
import Error404 from './Pages/Error404'
import Success from './Pages/Success';

const App = () => {
  return (
    <>
    <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/service' element={<ServicesPage/>}></Route>
    <Route path='/contact' element={<ContactPage/>}></Route>
    <Route path='/success' element={<Success/>}></Route>
    <Route element={<Error404/>}></Route>
    </Routes>
    </>
  )
}

export default App