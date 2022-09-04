import MainPage from "./pages/MainPage";
import "./style.sass";
import { Routes, Route } from "react-router-dom";
import Playground from "./pages/playgroundPage/index";
import PostPlg from "./components/CRM/PostPlayground";
import Header from "./components/Header";
import MCardSlider from "./components/Cards/MCardSlider";
import Chat from './components/Chat/Chat';
import AboutUs from "./components/AboutUs";
import PersonalArea from "./components/personalArea/PersonalArea";
import CreateTeam from "./components/Teams/CreateTeam";
import { ToastContainer } from "react-toastify";
import TeamsPage from "./pages/TeamsPage";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <>
      <div className="app">
      <Header />
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/playground/:id' element={<Playground />}></Route>
          <Route path='/addplg' element={<PostPlg /> } />
          <Route path='/chat' element={<Chat />}></Route>
          <Route path='/playground' element={<MCardSlider />}></Route>
          <Route path='/profile' element={<PersonalArea />} />
          <Route path='/teams' element={<TeamsPage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
