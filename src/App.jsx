import MainPage from "./pages/MainPage";
import "./style.sass";
import { Route, Routes } from "react-router-dom";
import Playground from "./pages/playgroundPage/index";

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/car" element={<Playground />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
