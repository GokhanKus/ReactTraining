import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowAltCircleRight } from "react-icons/fa";
import axios from 'axios'

const BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_iCQPPScbxACtreXeJ8ekeTzPZBqdTMFv84R2WP3h";
const BASE_CURRENCY = "base_currency";

function Currency() {

    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&${BASE_CURRENCY}=${fromCurrency}`);
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }

    return (
        <div className='currency-div'>

            <div className='app-name'>
                <h3 >CURRENCY APP</h3>
            </div>

            <div style={{ marginTop: '25px' }}>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type='number' className='amount' />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>

                <FaArrowAltCircleRight style={{ fontSize: '30px', marginRight: '10px', marginBottom: '-10px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>
                <input value={result} onChange={(e) => setResult(e.target.value)} type='number' className='result' />
            </div>

            <div >
                <button onClick={exchange}
                    className='exchange-button'>Convert</button>
            </div>

        </div>
    )
}

export default Currency