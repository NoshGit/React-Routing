import React, {useState, useEffect, useRef} from 'react';
import $http from 'axios';
import {Link} from 'react-router-dom';
import Pagination from './Shared/Pagination';
import queryString from 'query-string'


function Profile(props) {
    const {match} = props;
    const params = queryString.parse(props.location.search);
    const p = Number(params.p) || 1;
    const [page, setPage] = useState(p);
    const [users, setUsers] = useState([]);
    const [itemsPerPage, setItemsPerPage] = useState(0);
    const [total, setTotal] = useState(0);

    const fetchUsers = useRef( () => {});

    useEffect(()=>{
        fetchUsers.current();
    },[page]);

    fetchUsers.current = () => {
        
        $http.get(`https://reqres.in/api/users?page=${page}`)
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
        props.history.push(`${match.path}?p=${number}`);
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
