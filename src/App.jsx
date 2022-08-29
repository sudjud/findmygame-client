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

function App() {
  const [activeModalRegister, setActiveRegister] = useState(false);
  const [activeModalSignIn, setActiveSignIn] = useState(false);
  return (
    <>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                activeModalRegister={activeModalRegister}
                setActiveRegister={setActiveRegister}
              />
            }
          />
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/playground/:id' element={<Playground />}></Route>
          <Route path='/addplg' element={<PostPlg /> } />
        </Routes>
        {activeModalRegister && (
          <Register
            activeModalRegister={activeModalRegister}
            setActiveRegister={setActiveRegister}
            setActiveSignIn={setActiveSignIn}
          />
        )}
        {activeModalSignIn && (
          <SignIn
            activeModalSignIn={activeModalSignIn}
            setActiveSignIn={setActiveSignIn}
            setActiveRegister={setActiveRegister}
          />
        )}
      </div>
    </>
  );
}

export default App;
