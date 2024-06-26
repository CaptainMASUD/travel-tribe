import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap"; // Import Bootstrap modal components
import "../Components.css";
import svg from "../images/svg.png"; // Import your login image

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const navigate = useNavigate();
  const buttonColor = "#6420AA"; // Define button color
  const modalColor = "#6967c3"; // Define modal background color
  const modalTableBorderColor = modalColor; // Set modal table border color to match modal background color

  const handleLogin = () => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (!username || !password) {
      setErrorMessage("Username and password are required");
      setShowModal(true);
    } else if (
      storedUserData &&
      username === storedUserData.username &&
      password === storedUserData.password
    ) {
      document.cookie = `username=${username};`;
      document.cookie = `password=${password};`;

      navigate(
        `/user?username=${username}&name=${storedUserData.name}&address=${storedUserData.address}&number=${storedUserData.number}`
      );
    } else {
      setErrorMessage("Invalid username or password");
      setShowModal(true);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/forgotpass");
  };

  return (
    <div className="container login-container logmain">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <table
            className="login-table"
            style={{
              width: "90%",
              maxWidth: "600px",
              margin: "50px auto",
              background: modalColor,
              color: "white",
              borderRadius: "5px"
            }}
          >
            <tbody>
              <tr>
                <td colSpan="2">
                  <h2 className="card-title" style={{ textAlign: "center" }}>
                    <i class="fa-brands fa-pied-piper fa-fade "></i> Login{" "}
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Username :</label>
                </td>
                <td>
                  <input
                    placeholder="username"
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Password :</label>
                </td>
                <td>
                  <input
                    placeholder="*********"
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" style={{ textAlign: "center" }}>
                  <button
                    className="btn btn-primary btn1"
                    onClick={handleLogin}
                    style={{
                      marginLeft: "60px",
                      marginBottom:"20px",
                      width: "100px",
                      height: "30px",
                      padding: "0px",
                      backgroundColor: buttonColor,
                      borderRadius: "3px",
                      border: "none",
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-secondary btn2"
                    onClick={handleRegister}
                    style={{
                      marginLeft: "60px",
                      marginBottom:"20px",
                      width: "100px",
                      height: "30px",
                      padding: "0px",
                      backgroundColor: buttonColor,
                      borderRadius: "3px",
                      border: "none",
                    }}
                  >
                    Register
                  </button>
                </td>
              </tr>
              <tr>
                <td
                  colSpan="2"
                  style={{ textAlign: "center", marginTop: "10px" }}
                >
                  <span
                    className="forgot-password-link forgotpass"
                    style={{ cursor: "pointer" }}
                    onClick={handleForgotPassword}
                  >
                    Forgot Password?
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header
          closeButton
          style={{ backgroundColor: modalColor, color: "white" }}
        >
          {" "}
          {/* Customize modal header */}
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: modalColor, color: "white" }}>
          {errorMessage}
        </Modal.Body>{" "}
        {/* Customize modal body */}
        <Modal.Footer style={{ backgroundColor: modalColor, color: "white" }}>
          {" "}
          {/* Customize modal footer */}
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
            style={{ backgroundColor: buttonColor }}
          >
            Close
          </Button>{" "}
          {/* Customize close button style */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Login;
