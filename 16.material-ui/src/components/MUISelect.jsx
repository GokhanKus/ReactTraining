import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, TextField } from '@mui/material';

function MUISelect() {
    const [age, setAge] = useState('');
    const [currency, setCurrency] = useState('');//for single select
    const [currencies, setCurrencies] = useState([]);//for multiple select

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    console.log(age);
    console.log(currency);
    console.log(currencies);
    return (
        <Box>
            <FormControl sx={{ width: '150px' }}>
                <InputLabel>Age</InputLabel>
                <Select label="Age" value={age} onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>

            <TextField label="Currency" value={currency} onChange={(e) => setCurrency(e.target.value)}
                sx={{ width: '150px' }} select>
                <InputLabel>Currency</InputLabel>
                <MenuItem value="TRY">Türk Lirasi</MenuItem>
                <MenuItem value="USD">ABD Dolari</MenuItem>
                <MenuItem value="EUR">Euro</MenuItem>
            </TextField>

            <FormControl sx={{ width: '350px' }}>
                <InputLabel>Currencies</InputLabel>
                <Select label="Currencies" multiple value={currencies} onChange={(e) => setCurrencies(e.target.value)}>
                    <MenuItem value="TRY">Türk Lirasi</MenuItem>
                    <MenuItem value="USD">ABD Dolari</MenuItem>
                    <MenuItem value="EUR">Euro</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}

export default MUISelect