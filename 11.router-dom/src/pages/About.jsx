import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <>
            <h1>About</h1>
            <hr />
            <Link style={{ margin: '10px' }} to="employee">About Employee</Link>
            <Link to="company">About Company</Link>
            <Outlet />
        </>
    )
}

export default About