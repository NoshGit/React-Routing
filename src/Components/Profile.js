import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Profile(props) {
    const {match} = props;
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        console.log(">>", match);
        fetchUsers();
        return(()=>{
            console.log("Profile Component Unmounted");
        })
    },[])

    let fetchUsers = () => {
        //console.log("fetch User Initiated");
        //const data = await fetch('https://reqres.in/api/users?page=1');
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log(res.data.data);
            setUsers(res.data.data);
        })
        .catch(err => console.error(err))
        
    }
    return (
        <div>
            <h1>Profile Page</h1>
            <ul style={{listStyle:'none'}}>
                {
                    users.map( user => (                        
                        <li key={user.id}>
                            <Link to={`${match.path}/${user.id}`} style={{textDecoration:'none'}}>
                                {user.first_name} {user.last_name}
                            </Link>
                        </li>                        
                    ))
                }
            </ul>
        </div>
    )
}

export default Profile
