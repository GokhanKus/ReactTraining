import React, { useState } from 'react'

function Example3() {
    const [names] = useState(["okyanus", "deniz", "irmak", "pinar"]);
    console.log(names);

    return (
        <>
            <div>
                {names.map((name, index) => (
                    <p key={index}>{name}</p>
                ))}
            </div>

        </>
    )
}

export default Example3