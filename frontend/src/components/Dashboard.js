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
            <table className='dashboard-table'>
                <tr className='dashboard-header'>
                    <td>Full Name</td>
                    <td>Order ID</td>
                    <td>Win Draw Date</td>
                    <td>Ready for Mailout</td>
                    <td>Delivery Status</td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr className='dashboard-row'>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
    )
}
