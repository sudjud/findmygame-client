import React, { useState } from "react";
import { signIn } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import authorization from "./authorization.module.sass";

const SignIn = ({ setActiveRegister, setActiveSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);
  // const users = useSelector((state) => state.auth.users);
  // const loading = useSelector((state) => state.auth.loading);
  // const isActivated = useSelector((state) => state.auth.isActivated);
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [dispatch]);

  const handleLogin = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleClickSignIn = () => {
    dispatch(signIn({ password, email })).then((data) => {
      if (!data.error) {
        navigate("/", { replace: true });
        setActiveSignIn(false);
      }
    });
  };

  const handleClickRegister = () => {
    setActiveSignIn(false);
    setActiveRegister(true);
  };

  return (
    <div className={authorization.modal} onClick={() => setActiveSignIn(false)}>
      <div
        className={authorization.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Авторизация</h1>
        {error && <div className={authorization.errorDiv}>{error.error}</div>}
        <div className={authorization.inputs}>
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
            onClick={() => handleClickSignIn()}
          >
            Войти
          </button>
        </div>
        <div className={authorization.signInAccount}>
          <div>Нет аккаунта?</div>
          <button
            onClick={() => handleClickRegister()}
            className={authorization.buttonSignIn}
          >
            Зарегистрируйтесь
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
