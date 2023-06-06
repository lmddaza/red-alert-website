import React, { useState } from "react";
import Link from "next/link";

const LoginSignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform login or signup logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-page">
      <div className="login-signup-container">
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password"></label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>

          <div className="form-group forgot-password">
            <Link href="/forgot-password">Forgot Password?</Link>
          </div>

          <div className="form-group remember-me">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Remember Me
            </label>
          </div>
          <div className="form-group">
            <Link href="/home">
              <button type="submit" className="loginpage-button">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginSignupPage;
