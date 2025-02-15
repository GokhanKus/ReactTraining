const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 3 },
    { id: 6, lastName: 'Melisandre', firstName: 'Martin', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    { id: 10, lastName: 'Bolton', firstName: 'Ramsey', age: 30 },
    { id: 11, lastName: 'Baratheon', firstName: 'Robert', age: 50 },
    { id: 12, lastName: 'Tyrell', firstName: 'Margaery', age: 28 },
    { id: 13, lastName: 'Greyjoy', firstName: 'Theon', age: 33 },
    { id: 14, lastName: 'Mormont', firstName: 'Jorah', age: 46 },
    { id: 15, lastName: 'Tarly', firstName: 'Samwell', age: 27 },
    { id: 16, lastName: 'Martell', firstName: 'Oberyn', age: 40 },
    { id: 17, lastName: 'Hodor', firstName: 'Jasmine', age: 38 },
    { id: 18, lastName: 'Clegane', firstName: 'Sandor', age: 42 },
    { id: 19, lastName: 'Baelish', firstName: 'Petyr', age: 48 },
    { id: 20, lastName: 'Tarth', firstName: 'Brienne', age: 35 },
];

const Users = { columns, rows };
export default Users;

/*
*/