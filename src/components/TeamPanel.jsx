import TeamUser1 from "../assets/teamUser-1.png";
import TeamUser2 from "../assets/teamUser-2.png";
import TeamUser3 from "../assets/teamUser-3.png";
import TeamUser4 from "../assets/teamUser-4.png";
import TopMemberStar from "../assets/top-member-star.png";

const sampleData = [
  {
    img: TeamUser1,
    title: "Project Manager",
    name: "Anirudh Arun",
    rating: 9.8,
    bgColor: "bg-[#ffe484]",
  },
  {
    img: TeamUser2,
    title: "UX Designer",
    name: "Samvrant",
    rating: 9.2,
    bgColor: "bg-[#DCF9FF]",
  },
  {
    img: TeamUser3,
    title: "UI Designer",
    name: "Aryamann",
    rating: 9.1,
    bgColor: "bg-[#0b131528]",
  },
  {
    img: TeamUser4,
    title: "Motion Designer",
    name: "Dhanush",
    rating: 8.5,
    bgColor: "bg-[#FF99AD]",
  },
];

const TeamPanel = () => {
  return (
    <div className="performance-widget">
      <div className="performance-widget__header">
        <h3 className="performance-widget__title"> Team Member Performance</h3>
      </div>
      <ul className="performance-widget__list">
        {sampleData.map((e, i) => (
          <li className="performance-widget__list-item" key={i}>
            <div className="performance-widget__list-term-part">
              <span
                className={`performance-widget__image-container ${e.bgColor}`}
              >
                {i == 0 && (
                  <img
                    className="performance-widget__top-member-star-img"
                    src={TopMemberStar}
                    alt=""
                  />
                )}
                <img
                  className="performance-widget__member-img"
                  src={e.img}
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
