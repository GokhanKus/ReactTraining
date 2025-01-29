import React from 'react'

export const users = [
    {
        username: "gokhan",
        password: "1"
    },
    {
        username: "gokhan",
        password: "1"
    }
]

function Login() {
    //return icerisinde ornegin alt alta div etiketi acmak istersek <></> (fragment)icerisinde veya ana bir div icerisinde olusturmamzi lazim
    return (

        <div>

            <div>
                <p>Kullanici adi</p>
                <input type="text" />
            </div>

            <div>
                <p>Sifre</p>
                <input type="text" />
            </div>
            <button>Giris yap</button>
        </div>

    )
}

export default Login
//export default o componenti oldugu gibi, tamamını dısarıya acar

//sadece export yazarsak ornegin yukarda oldugu gibi (export const users = ..)
//sadece o kısmı dısarıya acmıs oluruz ve app.jsx'de import {users} from '/Login' diyerek kullanılabililr
