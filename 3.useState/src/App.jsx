import './App.css'
import Example from './Example';
import Example2 from './Example2';
import Example3 from './Example3';
import Example4 from './Example4';

function App() {

  return (
    <>
      {/* BİR STATE'E (DEGISKENIN DEGERI) SET METODUYLA YENIDEN DEGER ATANMASI DURUMUNDA O ILGILI COMPONENT(FUNCTION) YENIDEN RENDER EDILIR!!! KOTU DURUM*/}
      <Example />
      <hr />
      <Example2 />
      <hr />
      <Example3 />
      <hr />
      <Example4 />
    </>
  )
}

export default App
