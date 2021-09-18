import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function User(props) {
    const [user, setUser] = useState({});
    const history = useHistory();
    useEffect(()=>{
        console.log('$$$', props.match)
        fetchUser();
    },[])

    let fetchUser = () => {
        //console.log("fetch User Initiated");
        //const data = await fetch('https://reqres.in/api/users?page=2');
        axios.get(`https://reqres.in/api/users/${props.match.params.id}`)
        .then(res => {
            console.log(res.data.data);
            setUser(res.data.data);
        })
        .catch(err => console.error(err))
        
    }
    return (
        <>
        <div>
            <h1>{user.first_name} {user.last_name}</h1>
            
            <img src={user.avatar} />
        </div>
        <div>
            <button className="back-btn" onClick={history.goBack}>Back</button>
        </div>
        </>
    )
}

export default User
