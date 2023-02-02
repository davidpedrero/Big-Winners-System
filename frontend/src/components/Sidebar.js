import React from 'react'
import logo from '../images/logo.png';
import './Sidebar.css';
import {AiOutlineHome, AiOutlineComment} from 'react-icons/ai';
import {RiSettings3Line} from 'react-icons/ri';
import {MdOutlinePersonSearch, MdTrendingUp, MdOutlineGridView, MdLogout} from 'react-icons/md';

const Sidebar = () => {
    return (
        <div>
            <header className="page-header">
                <nav>
                <a href="#0" aria-label="Logo" className="logo">
                    <img id="big-winners-central-logo" src={logo} alt="Logo" width={150} height={150} />
                </a>
                <button className="toggle-mob-menu" aria-expanded="false" aria-label="open menu">
                    <svg width={20} height={20} aria-hidden="true">
                        <use xlinkHref="#down" />
                    </svg>
                </button>
                    <ul className="admin-menu">
                        <li className="menu-heading">
                            <h3>Main</h3>
                        </li>
                        <li>
                            <a href="#0">
                                <AiOutlineHome />
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <MdOutlinePersonSearch />
                                <span>Search</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <MdTrendingUp />
                                <span>Trends</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <MdOutlineGridView />
                                <span>Collection</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <AiOutlineComment />
                                <span>Comments</span>
                            </a>
                        </li>
                        <li className="menu-heading">
                            <h3>Settings</h3>
                        </li>
                        <li>
                            <a href="#0">
                                <RiSettings3Line />
                                <span>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a href="#0">
                                <MdLogout />
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Sidebar;