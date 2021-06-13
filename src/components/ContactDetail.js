import React from 'react';
import { Link } from 'react-router-dom';
import user  from '../images/user.png';

const ContactDetail = (props) => {

    const {name, email } = props.location.state.contact;

    return (
        <div className="main">
        <div className="ui centered card">
        <div className="image">
            <img src={user} alt="user" />
        </div>
        <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
        </div>
        </div>
        <div  className="ui column centered grid" >
            <div><Link to="/">
            <button className="ui blue button">Back To Contact List</button>
            </Link></div>
        </div>
        </div> 
    );
};

export default ContactDetail;