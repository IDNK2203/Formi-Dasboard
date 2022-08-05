import { FiSearch } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import DefaultUserAvatar from "../assets/userAvatar.png";

const TopBar = ({ setIsMenuOpen, isMenuOpen }) => {
  return (
    <section className="topbar">
      <div className="topbar__title-container">
        <h1 className="topbar__title">Dashboard</h1>
      </div>
      <div className="topbar__btn-container">
        <button onClick={() => setIsMenuOpen((e) => !e)}>
          <BiMenu className="sidebar__navlist-icon text-[1.5rem]"></BiMenu>
        </button>
      </div>
      <div className="topbar__actions-container">
        <button>
          <FiSearch className="sidebar__navlist-icon" />
        </button>
        <button>
          <RiNotification3Line className="sidebar__navlist-icon" />
        </button>
        <div className="topbar__avatar">
          <span className="topbar__avatar-img-container">
            <img src={DefaultUserAvatar} alt="" />
          </span>
          <button>
            <BiChevronDown />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopBar;
