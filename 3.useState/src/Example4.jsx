import React, { useState } from 'react'

function Example4() {
    const [count, setCount] = useState(0);

    const Azalt = () => {
        if (count > 0)
            setCount(count - 1)
    }
    const Arttir = () => {
        setCount(count + 1)
    }
    return (
        <>
            <p>Counter: {count}</p>
            <button onClick={Azalt}>Azalt</button>
            <button onClick={Arttir}>Arttir</button>
        </>
    )
}

export default Example4