import React, { useEffect, useState } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
        console.log(friends);
    }, [])
    return (
        <div>
            <h1>Friends :{friends.length}</h1>
            {
                friends.map(friend => <Users friend={friend}></Users>)
            }
        </div>
    );
};

export default Home;