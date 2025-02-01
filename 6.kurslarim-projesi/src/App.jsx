import { useState } from 'react'
import Header from './Header'
import './App.css'
import { courses } from './Data'
import Course from './components/Course'
import './css/Course.css'
function App() {

  return (
    <>
      <Header />
      <div className='course-main'>
        {
          courses?.map((course) => (
            <Course key={course.id} course={course} />
          ))
        }
      </div>
    </>
  )
}

export default App
