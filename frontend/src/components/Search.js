import React from 'react';
import './Search.css';
import {BsSearch} from 'react-icons/bs';
import {FaSearch} from 'react-icons/fa';
import {MdOutlinePersonSearch} from 'react-icons/md';

const Search = () => {
    return (
        <div className='search-page-container'>
            <div className='search-page-content'>
                <MdOutlinePersonSearch id='search-icon'/>
                <span>Search</span>
            </div>
            <div className='search-grid'>
                <input className='search-box' type="text" placeholder='Full Name' />
                <input className='search-box' type="text" placeholder='Order ID'/>
                <input className='search-box' type="text" placeholder='Customer ID' />
                <button> <FaSearch/> </button>
            </div>
        </div>
    )
}

export default Search;