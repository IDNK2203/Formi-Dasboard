import { Link } from "react-router-dom";
import Logo from "../assets/formilogo.png";
import { RiCalendarTodoLine, RiHome4Line } from "react-icons/ri";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineLineChart } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { RiBriefcase2Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__brand">
        <div className="sidebar__brand-img-container">
          <img className="sidebar__brand-img-container" src={Logo} alt="logo" />
        </div>
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__navlist">
          <li className="sidebar__navlist-item">
            <div className="sidebar__navlist-item-hover-indicator"></div>
            <Link className="sidebar__navlist-link" to="/">
              <RiHome4Line className="sidebar__navlist-icon" />
              <span>Dashboard </span>
            </Link>
          </li>
          <li className="sidebar__navlist-item">
            <div className="sidebar__navlist-item-hover-indicator"></div>
            <Link className="sidebar__navlist-link" to="/">
              <AiOutlineTeam className="sidebar__navlist-icon" />
              <span>My Team </span>
            </Link>
          </li>
          <li className="sidebar__navlist-item">
            <div className="sidebar__navlist-item-hover-indicator"></div>
            <Link className="sidebar__navlist-link" to="/">
              <RiBriefcase2Line className="sidebar__navlist-icon" />
              <span>Task </span>
            </Link>
          </li>
          <li className="sidebar__navlist-item">
            <div className="sidebar__navlist-item-hover-indicator"></div>
            <Link className="sidebar__navlist-link" to="/">
              <RiCalendarTodoLine className="sidebar__navlist-icon" />
              <span>Calender </span>
            </Link>
          </li>
          <li className="sidebar__navlist-item">
            <div className="sidebar__navlist-item-hover-indicator"></div>
            <Link className="sidebar__navlist-link" to="/">
              <AiOutlineLineChart className="sidebar__navlist-icon" />
              <span>Report </span>
            </Link>
          </li>
          <li className="sidebar__navlist-item">
            <div className="sidebar__navlist-item-hover-indicator"></div>
            <Link className="sidebar__navlist-link" to="/">
              <RiSettingsLine className="sidebar__navlist-icon" />
              <span>Setting </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar__btn-container">
        <button className="btn-primary">
          <FiLogOut className="btn-icon" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default SideBar;
