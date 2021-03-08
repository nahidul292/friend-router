import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Users = (props) => {
    const {name, email,id} = props.friend;
    const history = useHistory();
    const handleClick =(id) => {
        history.push(`/friend/${id}`)
    }
    const userStyle = {
        border: '1px solid purple',
        borderRadius:'20px',
        margin: '20px',
        padding: '20px'
    }
    return (
        <div style={userStyle}>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
            {/* <Link to={`/friend/${id}`}><button>Details</button> </Link> */}
            <button onClick={() => handleClick(id)}>See Details</button>
        </div>
    );
};

export default Users;