import React, { useState } from 'react'

function Example2() {

    const [firstName, setFirstName] = useState("Gokhan");
    const [lastName, setLastName] = useState("Kus");
    const [condition, setCondition] = useState(true);


    const ChangeName = () => {
        debugger;
        setLastName("Kurt")
    };



    return (
        <>
            <div>{firstName} {lastName}</div>

            <button onClick={() => setFirstName("Hakan")}>İsmi Degistir</button>
            <button onClick={ChangeName}>Soyisim Degistir</button>

            <div>
                <button onClick={() => {
                    setFirstName(condition ? <div>Ahmet</div> : <div>Gokhan</div>);
                    setCondition(!condition); // condition değerini tersine çevir
                }}>
                    İsmi Değiştir
                </button>
            </div>

        </>
    )
}

export default Example2