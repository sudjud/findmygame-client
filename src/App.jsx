import MainPage from "./pages/MainPage";
import "./style.sass";
// import Filtration from "./components/filtration/index";
import Register from "./components/Authorization/Register";
// import Login from "./components/Authorization/Login";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignIn from "./components/Authorization/Login";
import Playground from './pages/playgroundPage/index';
import PostPlg from "./components/CRM/PostPlayground";
import MCardSlider from "./components/Cards/MCardSlider";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/playground/:id' element={<Playground />}></Route>
          <Route path='/addplg' element={<PostPlg /> } />
          <Route path='/playgrounds' element={<MCardSlider />}></Route>
        </Routes>
      </div>
      
    </>
  );
}

export default App;
