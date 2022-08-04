import { AiOutlineMore } from "react-icons/ai";
import CircularProgressBar from "./CircularProgressBar";

const sampleData = [
  {
    title: "Works",
    percent: 50,
    value: 75,
    indicatorColor: "#FFD339",
  },
  {
    title: "Analytics",
    percent: 25,
    value: 310,
    indicatorColor: "#FF6D39",
  },
  {
    title: "Statistics",
    percent: 59,
    value: 75,
    indicatorColor: "#9539FF",
  },
  {
    title: "Tasks",
    percent: 75,
    value: 15,
    indicatorColor: "#3954FF",
  },
];

const dataWidget = () => {
  return (
    <div className="data-widget__list">
      {sampleData.map((e) => (
        <div className="data-widget__list-item">
          <div className="data-widget__top">
            <h3 className="data-widget__title">{e.title}</h3>
            <AiOutlineMore className="more-icon" />
          </div>
          <div className="data-widget__bottom">
            <CircularProgressBar
              sqSize={80}
              percentage={e.percent}
              strokeWidth={5}
              color={e.indicatorColor}
            />
            <div className="data-widget__bottom-right">
              <p className="data-widget__value">{e.value}</p>
              <span className="data-widget__text">{e.title} Today</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default dataWidget;
