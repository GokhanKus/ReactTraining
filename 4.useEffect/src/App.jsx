import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("component her render edildigi zaman calisan useEffect")
  })

  useEffect(() => {
    console.log("component ilk render edildiginde calisan useEffect")
  }, [])

  useEffect(() => {
    console.log("component ilk render edildiginde ve firstName state degerinde degisiklik oldugunda useEffect")
  }, [firstName])

  useEffect(() => {
    console.log("component ilk render edildiginde ve firstName ya da lastName state degerinde degisiklik oldugunda useEffect")
  }, [firstName, lastName])

  return (
    <>
      <div>
        <button onClick={() => { setFirstName("Gokhan") }}>isim degistir</button>
        <button onClick={() => { setLastName("Kus") }}>soyisim degistir</button>
      </div>
    </>
  )
}

export default App
// useState, useEffect, useMemo, useRef bunlar hooks'tur kendi custom hookslarımızı da yazabiliriz
//2. parametre olarak dizi geçmezsek '[]' her zaman calısır buna dikkat edilmeli