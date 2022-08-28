import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  deleteError,
  fetchUsers,
  registerUser,
} from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import authorization from "./authorization.module.sass";

const Auth = ({
  setActiveRegister,
  setActiveSignIn,
}) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  // const users = useSelector((state) => state.auth.users);
  // const loading = useSelector((state) => state.auth.loading);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleLogin = (e) => {
    setEmail(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterUser = () => {
    if (!token) {
      dispatch(registerUser({ email, password, name })).then((data) => {
        if (!data.error) {
          navigate("/", { replace: true });
          setActiveRegister(false);
          setActiveSignIn(true);
        }
      });
    }
  };

  const handleClickSignIn = () => {
    dispatch(deleteError());
    setActiveRegister(false);
    setActiveSignIn(true);
  };

  return (
    <div
      className={authorization.modal}
      onClick={() => setActiveRegister(false)}
    >
      <div
        className={authorization.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Регистрация</h1>
        {error && <div className={authorization.errorDiv}>{error.error}</div>}
        <div className={authorization.inputs}>
          <input
            type="text"
            placeholder="Login"
            value={name}
            onChange={handleName}
            className={authorization.loginInput}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleLogin}
            className={authorization.loginInput}
          />
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            className={authorization.passwordInput}
          />
        </div>
        <div className={authorization.inputs}>
          <button
            className={authorization.buttonRegister}
            onClick={() => handleRegisterUser()}
          >
            Зарегистрироваться
          </button>
        </div>
        <div className={authorization.signInAccount}>
          <div>У вас уже есть аккакунт?</div>
          <button
            onClick={() => handleClickSignIn()}
            className={authorization.buttonSignIn}
          >
            Войдите
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
