import React from 'react';
import auth from '../../services/authService';

const Profile = props => {
  const user = auth.getCurrentUser();
  return (
    <div>
      <h1>Profile : {user.name} </h1>
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
      </ul>
    </div>
  );
};

export default Profile;
