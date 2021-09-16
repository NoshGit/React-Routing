import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from './Shared/Pagination';

function Profile(props) {
    const {match} = props;
    const [page, setPage] = useState(1);
    const [users, setUsers] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [total, setTotal] = useState(0);

    //Only For Initial Load
    useEffect(()=>{
        console.log(">>", match);
        return(()=>{
            console.log("Profile Component Unmounted");
        })
    },[])

    useEffect(()=>{
        fetchUsers();
    },[page])

    let fetchUsers = () => {
        
        axios.get(`https://reqres.in/api/users?page=${page}`)
        .then(res => {
            console.log(res.data.data);
            setUsers(res.data.data);
            setItemsPerPage(res.data.per_page);
            setTotal(res.data.total);
        })
        .catch(err => console.error(err))
        
    }

    const onPaginationClick = number => {
        setPage(number);
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

            <Pagination {...props} currentPage={page} itemsPerPage={itemsPerPage} total={total} numberClicked={onPaginationClick}  />

            
        </div>
    )
}

export default Profile 
