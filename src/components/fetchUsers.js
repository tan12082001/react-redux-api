import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { fetchUsers } from '../store/users/usersSlice';

const FetchUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.users);
    const isLoading = useSelector((state) => state.users.isLoading);
    const error = useSelector((state) => state.users.error);
    
    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if(isLoading) {
        return <span>Loading ....</span>
    }
    if(error) {
        return <span>Something went wrong! try again.</span>
    }
    return (
        <div>
            {users.map((user) => (
                <div key={user.login.uuid}>
                    <p>User: {user.name.first} {user.name.last}</p>
                </div>
            ))}
        </div>
    )
}

export default FetchUsers;