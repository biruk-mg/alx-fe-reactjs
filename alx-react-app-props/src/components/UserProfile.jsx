// src/components/UserProfile.jsx
import React, { useContext } from 'react'; // Importing React and useContext
import UserContext from '../UserContext';  // Importing UserContext

function UserProfile() {
  const userData = useContext(UserContext); // Using useContext to get userData from UserContext

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;