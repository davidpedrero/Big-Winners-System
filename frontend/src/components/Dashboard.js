import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './Dashboard.css';

export const Dashboard = () => {
    return (
        <div className='dashboard-container'>
        <h1>Home</h1>
        <div className='dashboard-content'>
        </div>
        <div className='dashboard-grid'>
            <input className='search-box' type="text" placeholder='Full Name' />
            <input className='search-box' type="text" placeholder='Order ID'/>
            <input className='search-box' type="text" placeholder='Customer ID' />
        </div>
    </div>
    )
}
