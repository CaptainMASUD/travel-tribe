import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components.css';
import svg from '../images/svg.png'; // Import your login image

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));
    if (storedUserData && username === storedUserData.username && password === storedUserData.password) {
      navigate(`/user?username=${username}&name=${storedUserData.name}&address=${storedUserData.address}&number=${storedUserData.number}`);
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleForgotPassword = () => {
    navigate('/forgotpass');
  };

  return (
    <div className="container login-container logmain">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table className="login-table" style={{ width: '90%', maxWidth: '600px', margin: '50px auto', background: '#6967c3',color:"white" }}>
            <tbody>
              <tr>
                <td colSpan="2">
                  <h2 className="card-title" style={{textAlign:'center'}}><i class="fa-brands fa-pied-piper fa-fade "></i> Login </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Username :</label>
                </td>
                <td>
                  <input placeholder="username" type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password :</label>
                </td>
                <td>
                  <input placeholder="*********" type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </td>
              </tr>
              {errorMessage && 
                <tr>
                  <td colSpan="2">
                    <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>
                  </td>
                </tr>
              }
              <tr>
                <td colSpan="2" style={{ textAlign: 'center' }}>
                  <button className="btn btn-primary btn1" onClick={handleLogin} style={{marginLeft:'40px',width:'100px', height:'30px',padding:'0px',backgroundColor:'#6420AA',borderRadius:'3px',border:'none',}}>Login</button>
                  <button className="btn btn-secondary btn2" onClick={handleRegister} style={{marginLeft:'40px',width:'100px', height:'30px',padding:'0px',backgroundColor:'#6420AA',borderRadius:'3px',border:'none'}}>Register</button>
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: 'center', marginTop: '10px' }}>
                  <span className="forgot-password-link forgotpass" style={{cursor:"pointer",}} onClick={handleForgotPassword}>Forgot Password?</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Login;
