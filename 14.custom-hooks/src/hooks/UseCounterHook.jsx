import React from 'react'
import useCounter from './useCounter';

function UseCounterHook() {

  const { count, increase, decrease } = useCounter();
  //bu counter hookumu istedigim her yerde kullanabilirim
  //1 kere yazıp istedigimiz kadar kullanabiliriz
  return (
    <div>
      <div>{count}</div>
      <button onClick={increase}>Arttir</button>
      <button onClick={decrease}>Azalt</button>
    </div>
  )
}

export default UseCounterHook