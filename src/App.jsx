import MainPage from "./pages/MainPage";
import "./style.sass";
import { Routes, Route } from "react-router-dom";
import Playground from "./pages/playgroundPage/index";
import PostPlg from "./components/CRM/PostPlayground";
import Header from "./components/Header";
import MCardSlider from "./components/Cards/MCardSlider";
import PersonalArea from "./components/personalArea/PersonalArea";
import Questions from "./components/Questions/Questions";

function App() {
  return (
    <>
      <Header />
      <div className="app">
      <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/playground/:id" element={<Playground />}></Route>
          <Route path="/addplg" element={<PostPlg />} />
          <Route path="/playground" element={<MCardSlider />}></Route>
          <Route path="/profile" element={<PersonalArea />}></Route>
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
