import { useEffect, useState } from "react";
import UserCard from './UserCard';

const Admin = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])

    return (
        <>
            <h2>Users List</h2>
            {users.map(u => <UserCard key={u.id} user={u} />)}
        </>
    )
}

export default Admin;