import { FiSearch } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import DefaultUserAvatar from "../assets/userAvatar.png";

const TopBar = () => {
  return (
    <section className="topbar">
      <div className="topbar__title-container">
        <h1 className="topbar__title">Dashboard</h1>
      </div>
      <div className="topbar__actions-container">
        <button className="btn-pri">
          <FiSearch className="sidebar__navlist-icon" />
        </button>
        <button className="btn-pri">
          <RiNotification3Line className="sidebar__navlist-icon" />
        </button>
        <div className="topbar__avatar">
          <span className="topbar__avatar-img-container">
            <img src={DefaultUserAvatar} alt="" />
          </span>
          <button className="btn-pri">
            <BiChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
