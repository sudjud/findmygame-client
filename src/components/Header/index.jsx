import header from "./header.module.sass";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import SignIn from "../Authorization/Login";
import Register from "../Authorization/Register";

function Header() {
  const [activeModalRegister, setActiveRegister] = useState(false);
  const [activeModalSignIn, setActiveSignIn] = useState(false);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const handleClick = () => {
    if (!token) {
      return setActiveRegister(true);
    }
    navigate("/profile");
  };
  return (
    <div className={header.header}>
      <div onClick={() => navigate("/")} className={header.logo}>
        FindMyGame
      </div>
      <div className={header.navs}>
        <NavLink to="">Площадки</NavLink>
        <NavLink to="">Команды</NavLink>
        <NavLink to="">О нас</NavLink>
        <NavLink to="">Вопросы и ответы</NavLink>
      </div>
      <div className={header.account}>
        <button onClick={() => handleClick()}>Личный кабинет</button>
      </div>
      {activeModalRegister && (
        <Register
          activeModalRegister={activeModalRegister}
          setActiveRegister={setActiveRegister}
          setActiveSignIn={setActiveSignIn}
        />
      )}
      {activeModalSignIn && (
        <SignIn
          activeModalSignIn={activeModalSignIn}
          setActiveSignIn={setActiveSignIn}
          setActiveRegister={setActiveRegister}
        />
      )}
    </div>
  );
}
export default Header;
