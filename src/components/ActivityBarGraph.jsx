import { AiOutlineMore } from "react-icons/ai";
import _BarChart from "./BarChart";

const ActivityBarGraph = () => {
  return (
    <div className="chart-widget ml-4">
      <div className="chart-widget__header">
        <div className="chart-widget__title-container">
          <h3 className="chart-widget__title">Activities</h3>
        </div>

        <div className="chart-widget__child">
          <div className="chart-widget__legends">
            <span className="chart-widget__legend">
              <span className="chart-widget__legend-indicator bg-[#3954FF]"></span>
              <span className="chart-widget__legend-text ">Recieved</span>
            </span>
            <span className="chart-widget__legend">
              <span className="chart-widget__legend-indicator bg-[#FFD339]"></span>
              <span className="chart-widget__legend-text ">Completed</span>
            </span>
          </div>
          <div className="chart-widget__actions">
            <select className="select select-ghost text-txtsec  select-xs max-w-xs mx-2">
              <option disabled defaultValue>
                Select Months
              </option>
              <option>6 Months</option>
              <option>3 Months</option>
              <option>1 Months</option>
            </select>
            <AiOutlineMore className="more-icon text-[#00ade2]" />
          </div>
        </div>
      </div>
      <_BarChart />
    </div>
  );
};

export default ActivityBarGraph;
