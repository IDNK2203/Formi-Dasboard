import _AreaChart from "./AreaChart";
import { AiOutlineMore } from "react-icons/ai";

const ActivityLineGraph = () => {
  return (
    <div className="chart-widget md:mr-4 chart-widget--area">
      <div className="chart-widget__header">
        <div className="chart-widget__title-container">
          <h3 className="chart-widget__title">Team Activity</h3>
        </div>

        <div className="chart-widget__child justify-end">
          <div className="chart-widget__actions">
            <select className="select select-ghost text-txtsec font-light select-xs max-w-xs mx-2">
              <option disabled defaultValue>
                Select Months
              </option>
              <option>6 Months</option>
              <option>3 Months</option>
              <option>1 Months</option>
            </select>
            <AiOutlineMore className="more-icon  text-[#00ade2]" />
          </div>
        </div>
      </div>
      <_AreaChart />
    </div>
  );
};

export default ActivityLineGraph;
