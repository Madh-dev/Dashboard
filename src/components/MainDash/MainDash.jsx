import React from 'react'
import Cards from '../Cards/Cards'
import './MainDash.css'
import BasicTable from '../Table/Table'

const MainDash = () => {
    return (
        <div className='MainDash'>
            <h1>Dashboard</h1>
            <Cards />
            <BasicTable />
        </div>
    )
}

export default MainDash