import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircleUser, FaN, FaTv } from "react-icons/fa6";
import {BiBook, BiLogoCreativeCommons} from "react-icons/bi";
import {AiOutlineCalendar, AiOutlineDashboard, AiOutlineInbox} from "react-icons/ai";
import {BsClockHistory, BsQuestionLg} from "react-icons/bs";
import "./index.css";

function KanbasNavigation() {
  const colorRed = {color: "#ff0000"};
  const colorGray = "#c0c0c0";
  const links = [
    {"name": "Home", "icon": <FaN style={{fontSize : '4rem'}}/>},
    {"name": "Account", "icon": <FaCircleUser style={{fontSize : '2rem', color : colorGray}}/>}, 
    {"name": "Dashboard", "icon": <AiOutlineDashboard style={{fontSize : '2rem'}}/>},
    {"name": "Courses", "icon": <BiBook style={{fontSize : '2rem'}}/>},
    {"name": "Calendar", "icon": <AiOutlineCalendar style={{fontSize : '2rem',}}/>},
    {"name": "Inbox", "icon": <AiOutlineInbox style={{fontSize : '2rem',}}/>},
    {"name": "History", "icon": <BsClockHistory style={{fontSize : '2rem',}}/>},
    {"name": "Studio", "icon": <FaTv style={{fontSize : '2rem',}}/>},
    {"name": "Commons", "icon": <BiLogoCreativeCommons style={{fontSize : '2rem',}}/>},
    {"name": "Help", "icon": <BsQuestionLg style={{fontSize : '2rem',}}/>},];
  const { pathname } = useLocation();
  

  return (
    <div className="bg-black text-white list-group" style={{borderRadius: "0px", height: "100vh"}}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link.name}`}
          className={`list-group-item list-group-item-action ${link.name === "Home" ? "" : pathname.includes(link.name) && "active"} override-bs`}>
            <div className="d-flex justify-content-center align-items-center m-1">
          <div style={ colorRed }>{link.icon}</div>
        </div>
        {link.name === "Home" ? <div></div>: <div class="text-center">
        {link.name}
        </div>}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;