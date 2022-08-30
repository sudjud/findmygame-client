import MainPage from "./pages/MainPage";
import "./style.sass";
// import Filtration from "./components/filtration/index";
import Register from "./components/Authorization/Register";
// import Login from "./components/Authorization/Login";
import { useState } from "react";
import SignIn from "./components/Authorization/Login";
import Filtration from './components/filtration/index';
import { Route, Routes } from 'react-router-dom';
import Playground from './pages/playgroundPage/index';

function App() {
  const [activeModalRegister, setActiveRegister] = useState(false);
  const [activeModalSignIn, setActiveSignIn] = useState(false);
  return (
    <>
      <div className="app">
        {/* <MainPage /> */}
        {/* <header className="header">
          <Link to="/register">Регистрация</Link>
          <Link to="/login">Войти</Link>
        </header> */}
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
          <Route path='/car' element={<Playground />}></Route>
          {/* <Route
            path="/login"
            element={<SignIn setActiveSignIn={setActiveSignIn} setActiveRegister={setActiveRegister}/>}
          />
          <Route
            path="/register"
            element={
              <Register
                activeModalSignIn={activeModalSignIn}
                setActiveSignIn={setActiveSignIn}
              />
            }
          /> */}
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
