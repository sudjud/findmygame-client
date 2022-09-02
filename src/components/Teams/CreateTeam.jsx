import team from "./team.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { getSports } from "../../features/sportSlice";
import { useEffect, useState } from "react";
import Select from "react-select";
import { createTeam } from "../../features/teamSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function CreateTeam() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sports = useSelector((state) => state.sport.sports);
  const [sport, setSport] = useState("");
  const [maxMembers, setMembers] = useState(0);
  const maaxMembers = 22;

  useEffect(() => {
    dispatch(getSports());
  }, []);

  let sportOptions = [];
  if (sports) {
    sports.forEach((item) => {
      sportOptions.push({
        value: item._id,
        label: item.name,
      });
    });
  }

  let membersOptions = [];
  for (let i = 1; i <= maaxMembers; i++) {
    membersOptions.push({
      value: i,
      label: i,
    });
  }

  const handleMemSelect = (data) => {
    setMembers(data.value);
  };

  const handleSportSelect = (data) => {
    setSport(data.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTeam({ sport, maxMembers }));
    setSport("");
    setMembers(0);
  };

  return (
    <div onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
    }} className={team.create__modal}>
      <h1>Создать команду</h1>
      <form className={team.create__form}>
        <h3>Выберите вид спорта: </h3>
        <Select
          className={team.create__sport}
          id="sport"
          options={sportOptions}
          placeholder="Спорт"
          onChange={handleSportSelect}
        />
        <h3>Выберите максимальное количество участников:</h3>
        <Select
          className={team.create__mem}
          id="members"
          options={membersOptions}
          placeholder="Участники"
          onChange={handleMemSelect}
        />
        <input
          disabled={!sport || !maxMembers}
          className={team.create__button}
          type="submit"
          value="Создать команду"
          onClick={handleSubmit}
        />
      </form>
      <ToastContainer />
    </div>
  );
}
export default CreateTeam;
