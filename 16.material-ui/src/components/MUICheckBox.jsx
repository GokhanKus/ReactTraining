import React, { useState } from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Button } from '@mui/material';

function MUICheckBox() {

    const [isConfirm, setIsConfirm] = useState(false);
    console.log(isConfirm);
    const submit = () => {
        if (!isConfirm)
            alert('sozlesmeyi onaylayiniz')
        else {
            alert('islem basarili')
        }
    }
    return (
        <div>
            <FormControl sx={{ marginRight: '100px' }} component="fieldset">
                <FormLabel component="legend">Eğitim Durumu</FormLabel>
                <FormGroup aria-label="position">
                    <FormControlLabel
                        value="İlk Okul"
                        control={<Checkbox defaultChecked disabled />}
                        label="İlk Okul"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Orta Okul"
                        control={<Checkbox defaultChecked />}
                        label="Orta Okul"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Lise"
                        control={<Checkbox />}
                        label="Lise"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Üniversite"
                        control={<Checkbox />}
                        label="Üniversite"
                        labelPlacement="end"
                    />
                </FormGroup>

            </FormControl>

            <FormControl component="fieldset">
                <FormGroup aria-label="position">
                    <FormControlLabel
                        control={<Checkbox checked={isConfirm} onChange={(e) => setIsConfirm(e.target.checked)} />}
                        label="Kullanici sözleşmesini kabul ediyorum"
                        labelPlacement="end"
                    />
                    <Button onClick={submit} type='submit' color="secondary" variant="contained" size="small">Formu Gonder</Button>
                </FormGroup>

            </FormControl>
        </div>
    )
}

export default MUICheckBox