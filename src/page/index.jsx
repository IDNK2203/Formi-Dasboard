import ActivityLineGraph from "../components/ActivityLineGraph";
import ActivityBarGraph from "../components/ActivityBarGraph";
import DataWidget from "../components/DataWidget";
import TopBar from "../components/TopBar";
import TeamPanel from "../components/TeamPanel";
const Dashboard = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <div className={`page ${isMenuOpen ? "isMenuOpen" : ""}`}>
      <div className="py-4 px-6 w-full">
        <TopBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="panel-section">
          <div className="panel-section__top">
            <div className="topbar__title-container--mobile">
              <h1 className="topbar__title">Dashboard</h1>
            </div>
            <DataWidget></DataWidget>
            <ActivityBarGraph></ActivityBarGraph>
          </div>
          <div className="panel-section__bottom">
            <ActivityLineGraph></ActivityLineGraph>
            <TeamPanel></TeamPanel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
