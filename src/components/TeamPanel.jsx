import TeamUser1 from "../assets/teamUser-1.png";

console.log(TeamUser1);

const sampleData = [
  {
    id: "1",
    title: "Anirudh Arun",
    name: "Project Manager",
    rating: 9.8,
    bgColor: "#FFE484",
  },
  {
    id: "2",
    title: "UX Designer",
    name: "Samvrant",
    rating: 9.2,
    bgColor: "#DCF9FF",
  },
  {
    id: "2",
    title: "UI Designer",
    name: "Aryamann",
    rating: 9.1,
    bgColor: "rgba(11, 19, 21, 0.16)",
  },
  {
    id: "4",
    title: "Motion Designer",
    name: "Dhanush",
    rating: 8.5,
    bgColor: "#FF99AD",
  },
];

const TeamPanel = () => {
  return (
    <div className="performance-widget">
      <div className="performance-widget__header">
        <h3 className="performance-widget__title"> Team Member Performance</h3>
      </div>
      <ul className="performance-widget__list">
        {sampleData.map((e) => (
          <li className="performance-widget__list-item">
            <div className="performance-widget__list-term-part">
              <span
                className={`performance-widget__image-container bg-[${e.bgColor}]`}
              >
                <img
                  className="performance-widget__member-img"
                  src={`/src/assets/teamUser-${e.id}.png`}
                  alt=""
                />
              </span>
              <div className="performance-widget__text-box">
                <p className="performance-widget__member-name">{e.name}</p>
                <small className="performance-widget__list-term-member-title">
                  {e.title}
                </small>
              </div>
            </div>
            <div className="performance-widget__list-term-part">
              <span className="performance-widget__member-rating">
                {e.rating}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPanel;
