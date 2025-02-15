import React from 'react'
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import Users from '../userData'

function MUITableDataGrid() {
    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <div>
            <Paper sx={{ height: 500, width: '35%' }}>
                <DataGrid
                    rows={Users.rows}
                    columns={Users.columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                    sx={{ border: 0 }}
                />
            </Paper>
        </div>
    )
}

export default MUITableDataGrid