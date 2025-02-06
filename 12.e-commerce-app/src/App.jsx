import { useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'

function App() {

  return (
    <>
      <div>E-Ticaret sitesi</div>
      <PageContainer>
        <Header />
      </PageContainer>
    </>
  )
}

export default App
