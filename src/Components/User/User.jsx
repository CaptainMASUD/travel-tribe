import React, { useState, useEffect } from 'react';

function User() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from local storage
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {userData.username}</p>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          {/* Render other user data fields as needed */}
        </div>
      ) : (
        <p>No user data found in local storage.</p>
      )}
    </div>
  );
}

export default User;
