import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { is } from "@react-spring/shared";

const AuthModal = ({ setShowModal, isSignUp }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignUp) {
      const data = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      try {
        const res = await axios.post(
          "http://localhost:3000/user/sign-up",
          data
        );
        if (res.data.success) {
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err.message);
      }
    } else {
      const data = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      try {
        const res = await axios.post(
          "http://localhost:3000/user/sign-in",
          data
        );
        if (res.data.Success) {
          navigate("/dashboard");
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <div className="auth-modal">
      <div className="close-icon" onClick={handleClick}>
        ⓧ
      </div>
      <h2>{isSignUp ? "CREATE ACCOUNT" : "LOG IN"}</h2>
      <h5>
        <i>
          By clicking Log In, you agree to our terms. Learn how we process your
          data in our Privacy Policy and Cookie Policy.
        </i>
      </h5>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="password-check"
            name="password-check"
            placeholder="confirm password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p>{error}</p>
      </form>

      <hr />
      <h2>GET THE APP</h2>
    </div>
  );
};

export default AuthModal;
