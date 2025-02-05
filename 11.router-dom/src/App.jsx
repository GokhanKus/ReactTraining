import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Header from './components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />}>
          <Route path="employee" element={<EmployeeAbout />} /> {/*/about/employee*/}
          <Route path="company" element={<CompanyAbout />} />   {/*/about/company*/}
        </Route>

        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFoundPage />} /> {/* eslesen url adresi yoksa bu sayfaya gitsin*/}
      </Routes>
    </>
  )
}

export default App
//react router dom: url adresine gelen isteğe göre ihtiyac duyulan componenti render eder