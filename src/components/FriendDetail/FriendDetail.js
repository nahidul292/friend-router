import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const { friendId } = useParams();
    const [friend, setFriend] = useState({});
    const {id,name,email,phone,website,address} = friend;
    const detailsStyle = {
        margin: '20px',
        border: '1px solid lightgray',
        borderRadius: '15px',
        boxShadow: '-5px 5px #888888',
        padding: '20px'
    }
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    }, [])
    return (
        <div style ={detailsStyle}>
            <h1>Friends Details of ID:  {id}</h1>
            <h3>Name {name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone : {phone}</small></p>
            <p><small>Website : {website}</small></p>
                       
        </div>
    );
};

export default FriendDetail;