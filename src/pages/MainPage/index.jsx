import HowItWorks from '../../components/Blocks/HowItWorks';
import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import main from './main.module.sass'

function MainPage({activeModalRegister, setActiveRegister}) {

  return (
    <div className={main.main}>
      <Header activeModalRegister={activeModalRegister} setActiveRegister={setActiveRegister}/>
      <Welcome />
      <HowItWorks />
    </div>
  )
};
export default MainPage;