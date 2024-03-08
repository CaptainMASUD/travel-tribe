import React, { useState } from 'react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [showResetForm, setShowResetForm] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
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
    // Here you can implement your password reset logic.
    // For simplicity, let's just display a message.
    setMessage('Password successfully reset.');
    setShowResetForm(false);
    // You may want to add logic here to update the password in local storage or send it to a server.
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card p-4 mb-5" style={{width:"600px" ,margin:"0 auto" ,marginBottom:"80px",marginTop:"40px"}}>
        <h2 className="text-center mb-4">Forgot Password</h2>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Enter your email:</label>
          <input type="email" className="form-control form-control-sm" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <button className="btn btn-primary btn-sm d-block mx-auto" onClick={handleSubmit}>Submit</button>
        {message && <div className="mt-3 text-center">{message}</div>}
        {showResetForm && (
          <div className="mt-3">
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">New Password:</label>
              <input type="password" className="form-control form-control-sm" id="newPassword" value={newPassword} onChange={handleNewPasswordChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
              <input type="password" className="form-control form-control-sm" id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} />
            </div>
            <button className="btn btn-primary btn-sm d-block mx-auto" onClick={handleResetPassword}>Reset Password</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
