import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function MUITable() {

    const rows = [
        { id: 1, name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
        { id: 2, name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
        { id: 3, name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
        { id: 4, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
        { id: 5, name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
    ];

    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Dessert</TableCell>
                            <TableCell>Calories</TableCell>
                            <TableCell>Fat</TableCell>
                            <TableCell>Carbs</TableCell>
                            <TableCell>Protein</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.calories}</TableCell>
                                <TableCell>{row.fat}</TableCell>
                                <TableCell>{row.carbs}</TableCell>
                                <TableCell>{row.protein}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MUITable