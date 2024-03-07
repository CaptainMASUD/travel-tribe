import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function User() {
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [showInput, setShowInput] = useState(true);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
        setShowInput(false); 
      };
      reader.readAsDataURL(file);
    }
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    localStorage.removeItem('userData');
    navigate("/login");
  };

  return (
    <div className="container  mt-5 mb-5 usermain1">
      {userData ? (
        <div className="card" style={{ margin: '0 auto',marginBottom:"50px" }}>
          <div className="card-header">
            <h2>User Profile</h2>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                {showInput && (
                  <div>
                    <label htmlFor="profileImage" className="form-label">Upload Profile Picture</label>
                    <input
                      type="file"
                      className="form-control"
                      id="profileImage"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                )}
                {profileImage && (
                  <div className="text-center">
                    <img src={profileImage} alt="Profile" className="img-fluid rounded-circle mt-0 mb-3" style={{ width: '150px', height: '150px', marginBottom: '15px' }} />
                    <p className="mb-0"><strong>{userData.name}</strong></p>
                  </div>
                )}
                <button className="btn btn-danger mb-3" style={{marginTop:"20px"}} onClick={handleLogout}>Logout</button>
                <button className="btn btn-warning" onClick={handleDeleteAccount}>Delete Account</button>
              </div>
              <div className="col-md-8">
                <table className="table">
                  <tbody>
                    <tr>
                      <td><strong>Username:</strong></td>
                      <td>{userData.username}</td>
                    </tr>
                    <tr>
                      <td><strong>Name:</strong></td>
                      <td>{userData.name}</td>
                    </tr>
                    <tr>
                      <td><strong>Email:</strong></td>
                      <td>{userData.email}</td>
                    </tr>
                    {/* Additional user details */}
                    <tr>
                      <td><strong>Address:</strong></td>
                      <td><input type="text" className="form-control" defaultValue={userData.address} /></td>
                    </tr>
                    <tr>
                      <td><strong>Phone Number:</strong></td>
                      <td><input type="text" className="form-control" defaultValue={userData.phoneNumber} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>No user data found in local storage.</p>
      )}
    </div>
  );
}

export default User;
