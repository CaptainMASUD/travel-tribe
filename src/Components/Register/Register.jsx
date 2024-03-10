import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../Components.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!name || !email || !address || !birthdate || !phoneNumber || !username || !password || !confirmPassword) {
      setShowModal(true);
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        address,
        birthdate,
        phoneNumber,
        username,
        password
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('Registration successful!');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="container register-container regismain">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="register-table" style={{ borderRadius:"8px",width: '90%', maxWidth: '800px', margin: '50px auto', background: '#6967c3',color:"white" }}>
            <tbody>
              <tr>
                <td colSpan="2">
                  <h2 className="card-title" style={{ textAlign: 'center' }}>Register<i class="fa-solid fa-user-gear"></i></h2>
                </td>
              </tr>
              {errorMessage && 
                <tr>
                  <td colSpan="2">
                    <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{errorMessage}</p>
                  </td>
                </tr>
              }
              <tr>
                <td>
                  <label>Name:</label>
                </td>
                <td>
                  <input placeholder='name' type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Email:</label>
                </td>
                <td>
                  <input placeholder='email' type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Address:</label>
                </td>
                <td>
                  <input placeholder='address' type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Birthdate:</label>
                </td>
                <td>
                  <input  type="date" className="form-control" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Phone Number:</label>
                </td>
                <td>
                  <input placeholder='phone number' type="text" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Username:</label>
                </td>
                <td>
                  <input placeholder='username' type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password:</label>
                </td>
                <td>
                  <input placeholder='password' type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Confirm Password:</label>
                </td>
                <td>
                  <input placeholder='Confirm Password' type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button className="btn btn-primary btn1" onClick={handleRegister} style={{ marginLeft: '50px', backgroundColor: '#662549', border: 'none', borderRadius: '3px' }}>Register</button>
                    <button className="btn btn-primary btn2" onClick={handleLoginClick} style={{ marginLeft: '20px', backgroundColor: '#872341', border: 'none', borderRadius: '3px' }}>Login</button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Bootstrap Modal for Error Message */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill out all fields.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Register;
