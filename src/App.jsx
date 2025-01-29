import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let vize1 = 50;
  let vize2 = 70;
  let ortalama = (vize1 + vize2) / 2;
  let mesaj;
  let names =
    [
      "Okyanus", "Deniz", "Irmak", "Pinar"
    ]

  if (ortalama >= 50)
    mesaj = <p>Gectiniz  ortalamaniz: {ortalama}</p>
  else
    mesaj = <p>Kaldiniz  ortalamaniz: {ortalama}</p>

  return (
    <div>

      <ul>
        {names.map((name, index) =>
          <li key={index}
            style={{
              backgroundColor: 'orange',
              border: '1px solid black'
            }}>
            {name}
          </li>
        )}
      </ul>

      {mesaj}
      {ortalama >= 50 ? <p>Gectiniz  ortalamaniz: {ortalama}</p> : <p>Kaldiniz  ortalamaniz: {ortalama}</p>}
    </div>
  )
}

export default App
