import "./styles/index.scss";
import { Routes, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import Dashboard from "./page";
function App() {
  return (
    <div className="App">
      <div className="view">
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
