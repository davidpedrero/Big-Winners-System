import React from "react";
import "./Profile.css";
import {TbEdit} from 'react-icons/tb'

const Profile = () => {
    // const onEditButtonClick => () => {

    // }

    return (
        <div>
            <svg style={{ display: "none" }}>
                <symbol id="users" viewBox="0 0 16 16">
                    <path d="M8,0a8,8,0,1,0,8,8A8,8,0,0,0,8,0ZM8,15a7,7,0,0,1-5.19-2.32,2.71,2.71,0,0,1,1.7-1,13.11,13.11,0,0,0,1.29-.28,2.32,2.32,0,0,0,.94-.34,1.17,1.17,0,0,0-.27-.7h0A3.61,3.61,0,0,1,5.15,7.49,3.18,3.18,0,0,1,8,4.07a3.18,3.18,0,0,1,2.86,3.42,3.6,3.6,0,0,1-1.32,2.88h0a1.13,1.13,0,0,0-.27.69,2.68,2.68,0,0,0,.93.31,10.81,10.81,0,0,0,1.28.23,2.63,2.63,0,0,1,1.78,1A7,7,0,0,1,8,15Z" />
                </symbol>
            </svg>
            <section className="page-content">
                <a href="https://www.google.com/">
                    <TbEdit id="edit__button" />
                </a>
                <section className="search-and-user">
                    <div>
                        <h1 id="winners-name">David Pedrero</h1>
                    </div>
                    <div className="admin-profile">
                        <span className="greeting">Hello David!</span>
                        <div className="notifications">
                            <span className="badge">1</span>
                            <svg>
                                <use xlinkHref="#users" />
                            </svg>
                        </div>
                    </div>
                </section>
                <section className="grid">
                    <div className="general__container">
                        <div className="general__content">
                            <h1 className="section__headers">General</h1>
                            <br></br>
                            <table className="general__table">
                                <tr>
                                    <td>Customer ID</td>
                                    <td contentEditable="true">XX-XXX-XXX-XXX</td>
                                </tr>
                                <tr>
                                    <td>Order ID</td>
                                    <td>XX-XXXXX-XXXX</td>
                                </tr>
                                <tr>
                                    <td>Draw Date</td>
                                    <td>mm/dd/yyyy</td>
                                </tr>
                                <tr>
                                    <td>Game</td>
                                    <td>Powerball</td>
                                </tr>
                                <tr>
                                    <td>Amount Won</td>
                                    <td>$XX.00</td>
                                </tr>
                                <tr>
                                    <td>Ticket Images</td>
                                    <td>URL</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="tracking__container">
                        <div className="tracking__content">
                            <h1 className="section__headers">Tracking</h1>
                            <br></br>
                            <table className="tracking__table">
                                <tr>
                                    <td>Tracking No.</td>
                                    <td>126737478FJ338DF2</td>
                                </tr>
                                <tr>
                                    <td>Mailed By</td>
                                    <td>example@lotto.com</td>
                                </tr>
                                <tr>
                                    <td>Date Mailed</td>
                                    <td>mm/dd/yyyy</td>
                                </tr>
                                <tr>
                                    <td>Delivery Status</td>
                                    <td>
                                        <select>
                                            <option selected="selected"></option>
                                            <option>Sent</option>
                                            <option>Delivered</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Winners Box Status</td>
                                    <td>
                                        <select>
                                            <option selected="selected"></option>
                                            <option>N/A</option>
                                            <option>Sent</option>
                                            <option>Delivered</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Winners Box Images</td>
                                    <td>URL</td>
                                </tr>
                                <tr>
                                    <td>Email Sent</td>
                                    <td> <input type="checkbox"></input> </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="personal__container">
                        <div className="personal__content">
                            <h1 className="section__headers">Personal</h1>
                            <br></br>
                            <table className="personal__table">
                                <tr>
                                    <td>Full Name</td>
                                    <td contentEditable="true" >David Pedrero</td>
                                </tr>
                                <tr>
                                    <td>Address</td>
                                    <td>4109 7th ave Brooklyn, New York 11232</td>
                                </tr>
                                <tr>
                                    <td>Zendesk Ticket</td>
                                    <td>URL</td>
                                </tr>
                                <tr>
                                    <td>Docs Confirmed</td>
                                    <td>   <input type="checkbox" /> </td>
                                </tr>
                                <tr>
                                    <td>Ready for Mailout</td>
                                    <td><input type="checkbox" /></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="notes">
                            <h1 className="section__headers">Notes</h1>
                            <br></br>
                            <div>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quae earum ullam voluptatibus praesentium aliquid fugit repudiandae tempora molestias, odit eaque nobis quod, aut eos ipsam at odio! Inventore animi quam nemo voluptate architecto fugit sunt ad at aut vitae id officiis veniam labore, beatae dolorum cumque vel necessitatibus reiciendis!
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="page-footer">
                    <span>made by </span>
                    <a href="https://nj.lotto.com/" target="_blank" rel="noreferrer">
                        <img
                            width={24}
                            height={24}
                            src="https://images.ctfassets.net/kv7tzfb3km9m/sEGjQa6mo9jhemmn66O2s/bbc5b800aa45421db55c7b820e48a238/logo.png"
                            alt="Lotto.com Logo"
                        />
                    </a>
                </footer>
            </section>
        </div>
    );
};

export default Profile;