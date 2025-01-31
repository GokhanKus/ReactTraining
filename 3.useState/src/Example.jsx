import React, { useState } from 'react'

function Example() {
    //ilk param degisken adi, 2.metodun adi ve usestate icerisine ilk verilen deger degiskene atanir metot ile deger degistirilir
    const [showText, setShowText] = useState(false)
    const [buttonText, setButtonText] = useState("Show the Text");

    return (
        <>
            {showText && <div>This is a text</div>}
            <div>
                <button onClick={() => {
                    setShowText(!showText); // Yazıyı göster/gizle
                    setButtonText(showText ? "Show the Text" : "Hide the Text"); // Buton yazısını güncelle
                }}>
                    {buttonText}
                </button>
            </div>
        </>
    )
}

export default Example