import { deleteToken } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "./profile.module.sass";

const Logout = ({ activeModalLogOut, setActiveModalLogOut }) => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Функция для закрытия модального окна подтверждения выхода их аккаунта
  const handleClickNo = () => {
    setActiveModalLogOut(false);
  };
  // Функция для подтвердения выхода из аккаунта
  const handleClickYes = () => {
    if (token) {
      localStorage.removeItem("token");
      dispatch(deleteToken());
      setActiveModalLogOut(false);
      navigate("/");
    }
  };
  return (
    <div className={style.modal} onClick={() => activeModalLogOut(false)}>
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Вы хотите выйти?</h1>
        <div className={style.buttons}>
          <button className={style.button} onClick={() => handleClickYes()}>
            Да
          </button>
          <button className={style.button} onClick={() => handleClickNo()}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
