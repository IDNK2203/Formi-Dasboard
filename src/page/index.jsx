import ActivityLineGraph from "../components/ActivityLineGraph";
import ActivityBarGraph from "../components/ActivityBarGraph";
import DataWidget from "../components/DataWidget";
import TopBar from "../components/TopBar";
import TeamPanel from "../components/TeamPanel";
const Dashboard = () => {
  return (
    <div className="page">
      <div className="py-4 px-6">
        <TopBar />
        <div className="panel-section">
          <div className="panel-section__top">
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
