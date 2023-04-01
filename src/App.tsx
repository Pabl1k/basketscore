import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import LeagueView from "./views/LeagueView/LeagueView";
import "./App.scss";

const App = () => {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="/:selectedLeague" element={<LeagueView />} />
        <Route path="/:selectedLeague/:selectedTeam" element={<h1>Team page</h1>} />

        <Route path="*" element={<h1>Page doesn't exist</h1>} />
      </Routes>
    </div>
  );
};

export default App;
