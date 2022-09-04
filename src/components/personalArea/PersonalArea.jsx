import { fetchPlaygrounds } from "../../features/playgroundSlice";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../features/authSlice";
import { React, useState, useEffect } from "react";
import style from "./profile.module.sass";
import Playground from "./Playground";
import Logout from "./LogoutModal";
import { fetchTeams } from "../../features/teamSlice";
import MyGame from "./MyGame";

const PersonalArea = () => {
  // Забираем из state все места
  const playgrouds = useSelector((state) => state.playground.playgrounds);
  const loading = useSelector((state) => state.auth.loading);
  // Тут долны храниться данные авторзованного пользователя
  const myData = useSelector((state) => state.auth.user);
  const myGames = useSelector((state) =>
    state.team.teams.filter((item) => {
      for (let i of item.members) {
        if (i._id === myData._id) {
          return true;
        }
      }
    })
  );

  // Состояние для открытия и закрытия модального окна подтверждения выхода из аккаунта
  const [activeModalLogOut, setActiveModalLogOut] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTeams());
  }, [dispatch]);

  // Fetch запрос для мест, чтобы отобразить их в профиле как забронированные
  useEffect(() => {
    dispatch(fetchPlaygrounds());
  }, [dispatch]);

  // Fetch запрос для данных авторизованного пользователя
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Функция выхода из аккаунта (функция вызывает модальное окно для подтверждения)
  const handleClickLogOut = () => {
    setActiveModalLogOut(true);
  };

  // Условие, чтобы подождать ответа от сервера
  if (!loading && playgrouds.length) {
    return (
      <div className={style.container}>
        <div className="bscontainer">
          <div className={style.profile}>
            <div className={style.profile__right}>
              <div>
                <h1>Мои брони</h1>
                {playgrouds.map((item) => {
                  for (let i of item.booking) {
                    if (i.user._id === myData._id) {
                      return (
                        <Playground
                          key={item._id}
                          id={item._id}
                          name={item.name}
                          address={item.address}
                          sportName={item.sport.name}
                          price={item.price}
                        />
                      );
                    }
                  }
                  return null;
                })}
              </div>
              <div className={style.myTeams}>
                <h1>{`Мои команды:${myGames.length}`}</h1>
                <div className={style.myTeamsScroll}>
                  {myGames.map((item) => {
                    for (let i of item.members) {
                      // console.log(item);
                      for (let a in i) {
                        return (
                          <MyGame
                            key={item._id}
                            namePlayer={item.admin.name}
                            emailPlayer={item.admin.email}
                            id={item._id}
                          />
                        );
                      }
                    }
                  })}
                </div>
              </div>
            </div>

            <div className={style.profile__left}>
              <h3>Личный кабинет</h3>
              <div>Ваш логин: {myData.name}</div>
              <div>Ваш email: {myData.email}</div>
              <button
                className={style.account}
                onClick={() => handleClickLogOut()}
              >
                Выйти из аккаунта
              </button>
            </div>
            {activeModalLogOut && (
              <Logout
                activeModalLogOut={activeModalLogOut}
                setActiveModalLogOut={setActiveModalLogOut}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
  <div>Загрузка</div>;
};

export default PersonalArea;
