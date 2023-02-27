import "./App.css";
import FootBar from "./components/FootBar";
import Header from "./components/Header";
import DashboardPage from "./pages/DashboardPage";
import { DashboardOverview } from "./pages/DashboardOverview";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="body">
      <div className="bg1"></div>
      <div className="bg2"></div>
      <div className="bg3"></div>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />}></Route>
        <Route path="/overview" element={<DashboardOverview />}></Route>
      </Routes>
      <FootBar />
    </div>
  );
}

export default App;
