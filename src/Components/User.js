import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function User(props) {
    const match = useRef(props.match);
    const [user, setUser] = useState({});
    const history = useHistory();

    useEffect(()=>{
        console.log('$$$', match)
        axios.get(`https://reqres.in/api/users/${match.current.params.id}`)
        .then(res => {
            console.log(res.data.data);
            setUser(res.data.data);
        })
        .catch(err => console.error(err))
    },[])

    if(Object.keys(user).length === 0){
        return null
    }

    return (
        <>
        <div>
            <h1>{user.first_name} {user.last_name}</h1>
            
            <img alt={user?.first_name+" "+user?.last_name} src={user.avatar} />
        </div>
        <div>
            <button className="back-btn" onClick={history.goBack}>Back</button>
        </div>
        </>
    )
}

export default User
