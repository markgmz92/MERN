import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{id: 'u1', name: 'John Doe', image: 'https://previews.123rf.com/images/alphaspirit/alphaspirit1504/alphaspirit150400118/38665682-simple-young-man-face-smiling-and-optimistic.jpg', places: 1}];
    return <UsersList items={USERS}/>
};

export default Users;