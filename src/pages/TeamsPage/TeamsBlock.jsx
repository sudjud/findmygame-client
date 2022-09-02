import Team from "../../components/Teams/Team";
import teams from './teams.module.sass'

function TeamsBlock() {

  return (
    <div className={teams.block}>
      <Team />
    </div>
  )
};
export default TeamsBlock;