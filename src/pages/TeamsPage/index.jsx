import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTeam from "../../components/Teams/CreateTeam";
import Team from "../../components/Teams/Team";
import { fetchTeams } from "../../features/teamSlice";
import teamsStyle from "./teams.module.sass";

function TeamsPage() {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.team.teams);
  const [createModal, setCreateModal] = useState(false);

  useEffect(() => {
    dispatch(fetchTeams());
  }, []);

  if (teams) {
    return (
      <div className={teamsStyle.teams}>
        <div className="bscontainer">
          <button
            className={teamsStyle.teams__createTeam}
            onClick={() => setCreateModal(true)}
          >
            Создать команду
          </button>
          {createModal && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                setCreateModal(false);
              }}
              className={teamsStyle.create}
            >
              <CreateTeam />
            </div>
          )}
          <h1>Вступайте в команду</h1>
          <div className={teamsStyle.teams__block}>
            {
              teams.map(item => {
                return (
                  <Team 
                    key={item._id}
                    id={item._id}
                    admin={item.admin}
                    sport={item.sport}
                    maxMembers={item.maxMembers}
                    members={item.members}
                    time={item.time}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}
export default TeamsPage;
