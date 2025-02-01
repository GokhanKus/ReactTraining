import { useState } from 'react'
import Header from './Header'
import './App.css'
import { courses } from './Data'
import Course from './components/Course'
function App() {

  return (
    <>
      <Header />
      {
        courses?.map((course) => (
          <Course key={course.id} course={course} />
        ))
      }
    </>
  )
}

export default App
