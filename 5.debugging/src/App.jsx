import { useState } from 'react'
import './App.css'

function App() {

  const [vize1, setVize1] = useState();
  const [vize2, setVize2] = useState();
  const [avg, setAvg] = useState(0);

  const CalculateAvg = () => {
    debugger;
    let toplam = Toplam();
    console.log(toplam);
    setAvg((vize1 + vize2) / 2);
    return avg;
  }
  const Toplam = () => {
    debugger;
    return vize1 + vize2;
  }

  console.log(Toplam());

  return (
    <>
      <div>
        <input type="number" value={vize1} onChange={(e) => { setVize1(Number(e.target.value)) }} />
      </div>
      <div>
        <input type="number" value={vize2} onChange={(e) => { setVize2(Number(e.target.value)) }} />
      </div>
      <div>
        <button onClick={CalculateAvg}>Calculate The Average</button>
        <p>Ortalama: {avg}</p>
      </div>
    </>
  )
}

export default App
