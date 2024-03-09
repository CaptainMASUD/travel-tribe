import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../Components.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    checkPasswordStrength(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = () => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.email === email) {
        setShowResetForm(true);
        setMessage('');
      } else {
        setMessage('Email not found.');
      }
    } else {
      setMessage('No user data found.');
    }
  };

  const handleResetPassword = () => {
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }

    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      userData.password = newPassword;
      localStorage.setItem('userData', JSON.stringify(userData));
      setMessage('Password successfully reset.');
      setShowResetForm(false);
      setEmail('');
    } else {
      setMessage('No user data found.');
    }
  };

  const checkPasswordStrength = (password) => {
    const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/g;
    const regexUpper = /[A-Z]/g;

    if (password.match(regexSpecial) && password.match(regexUpper) && password.length >= 8) {
      setPasswordStrength('Super Strong');
    } else if (password.match(regexSpecial) || password.match(regexUpper) || password.length >= 8) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('normal');
    }
  };

  return (
    <div className="container mt-5 frpass">
      <div className="card p-4 mb-5" style={{ maxWidth: "600px", margin: "0 auto", marginBottom: "80px", marginTop: "40px" }}>
        <h2 className="text-center mb-4"><i class="fa-solid fa-pen-to-square fa-beat-fade"></i> Forgot Password</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter your email:</label>
          <input type="email" className="form-control form-control-sm" id="email" value={email} onChange={handleEmailChange} style={{ width: "280px" }} />
        </div>
        <button className="btn btn-primary btn-sm d-block mx-auto mb-3" onClick={handleSubmit}>Submit</button>
        {message && <div className="text-center">{message}</div>}
        {showResetForm && (
          <div className="mt-3">
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password:</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} className="form-control form-control-sm" id="newPassword" value={newPassword} onChange={handleNewPasswordChange} style={{ width: "200px" }} />
                <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility} style={{ height: "31px", width: "50px" }}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
              {passwordStrength && <div className="password-strength" style={{color:'#B3FFAE'}}>{passwordStrength} Password</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <div className="input-group">
                <input type={showPassword ? "text" : "password"} className="form-control form-control-sm" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} style={{ width: "200px" }} />
                <button className="btn btn-outline-secondary" type="button" onClick={togglePasswordVisibility} style={{ height: "31px", width: "50px" }}>
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            <button className="btn btn-primary btn-sm d-block mx-auto" onClick={handleResetPassword}>Reset Password</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
