import team from './team.module.sass'
import { IoIosFootball } from "react-icons/io";
import { HiUser, HiOutlineUser } from "react-icons/hi";
import moment from 'moment';
import { useDispatch } from 'react-redux'
import 'moment/locale/ru'
import { joinToTeam } from '../../features/teamSlice';

function Team(params) {
  const dispatch = useDispatch()
  const { id, admin, sport, maxMembers, members, time } = params;
  let busy = []
  let vacant = [];
  for (let i = 1; i <= members.length; i++) {
    busy.push(<HiUser />)
  }
  for (let i = 1; i <= maxMembers - members.length; i++) {
    vacant.push(<HiOutlineUser />)
  }
  moment.locale('ru');

  const joinHandle = (e) => {
    e.stopPropagation();
    dispatch(joinToTeam(id));
  }
  

  return (
    <div className={team.team}>
      <div className={team.team__title}>
        {`Команда ${admin.name}`}
      </div>

      <div className={team.team__setting}>
        {
          sport.name === 'football' ? <IoIosFootball /> : ''
        }
        <div>{members.length}/{maxMembers}</div>
        { busy }{ vacant }
      </div>

      <div className={team.team__time}>
        Создана: <b>{moment(time).calendar()}</b>
      </div>
      <div className={team.team__join}>
        <button onClick={joinHandle}>Вступить</button>
      </div>
    </div>
  )
};
export default Team;