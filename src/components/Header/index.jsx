import header from "./header.module.sass";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className={header.header}>
      <div className={header.logo}>FindMyGame</div>
      <div className={header.navs}>
        <NavLink to="">Площадки</NavLink>
        <NavLink to="">Команды</NavLink>
        <NavLink to="">О нас</NavLink>
        <NavLink to="">Вопросы и ответы</NavLink>
      </div>
      <div className={header.account}>
        <button>Личный кабинет</button>
      </div>
    </div>
  );
}
export default Header;
