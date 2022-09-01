import HowItWorks from '../../components/Blocks/HowItWorks';
import Header from '../../components/Header';
import Welcome from '../../components/Welcome';
import main from './main.module.sass'

function MainPage() {

  return (
    <div className={main.main}>
      <Welcome />
      <HowItWorks />
    </div>
  )
};
export default MainPage;