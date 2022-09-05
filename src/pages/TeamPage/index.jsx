import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchTeams, joinToTeam } from "../../features/teamSlice";
import teamStyle from "./teamP.module.sass";
import moment from "moment";
import "moment/locale/ru";

function TeamPage() {
  moment.locale("ru");
  const dispatch = useDispatch();
  const { id } = useParams();
  const team = useSelector((state) =>
    state.team.teams.find((item) => item._id === id)
  );
  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  const membersList = [];

  const joinHandle = () => {
    dispatch(joinToTeam(id))
  };

  if (team) {
    for (let m = 0; m < team.maxMembers; m++) {
      if (team.members[m]) {
        membersList.push(<li>{team.members[m].name}</li>);
      } else {
        membersList.push(<li>_____</li>);
      }
    }
    return (
      <div className={teamStyle.team}>
        <div className="container">
          <div className={teamStyle.team__title}>Команда {team.admin.name}</div>
          <div className={teamStyle.team__wrapper}>
            <div className={teamStyle.team__leftBlock}>
              <div className={teamStyle.team__membersCount}>
                Участники: {team.members.length}/{team.maxMembers}
              </div>
              <ul className={teamStyle.team__membersList}>{membersList}</ul>
            </div>
            <div className={teamStyle.team__rightBlock}>
              <div className={teamStyle.team__createdAt}>
                Дата создания: <br /> <b>{moment(team.time).calendar()}</b>
              </div>
              <div className={teamStyle.team__playground}>
                Площадка: <br /> <b>---Допилить---</b>
              </div>
            </div>
          </div>
          <div className={teamStyle.team__joinBtn}>
            <button onClick={joinHandle}>
              Вступить
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default TeamPage;
