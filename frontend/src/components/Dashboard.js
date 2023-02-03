import React from 'react';
import {FaSearch} from 'react-icons/fa';
import './Dashboard.css';

export const Dashboard = () => {
    return (
        <div className='dashboard-container'>
        <div className='dashboard-content'>
            <div className='state-tabs'>
                <button class="tablinks" onclick="">New Jersey</button>
                <button class="tablinks" onclick="">New York</button>
                <button class="tablinks" onclick="">Texas</button>
                <button class="tablinks" onclick="">Arkansas</button>
                <button class="tablinks" onclick="">Minnesota</button>
            </div>
            <div className='dashboard-grid'>
                <span>Full Name</span>
                <span>Order ID</span>
                <span>Win Draw Date</span>
                <span>Ready for Mailout</span>
                <span>Delivery Status</span>
            </div>
        </div>
    </div>
    )
}
