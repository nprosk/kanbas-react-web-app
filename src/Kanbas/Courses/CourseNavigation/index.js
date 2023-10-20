import db from "../../Database";
import { Link, useParams, useLocation } from "react-router-dom";
import {IoReorderThreeOutline} from "react-icons/io5";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom_Meetings", "Assignments", "Quizzes", "Grades", "People"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
  return (
    <div className="ms-2">
    <div className="d-flex" style={{color: "#E3242B", fontSize: "2rem"}}>
        <div className="pe-4">
        <IoReorderThreeOutline/>
        </div>
        {course.number}
        <div className="px-2" style={{color:"gray"}}> &gt;</div>
        <div style={{color:"black"}}> {links.filter(a => pathname.includes(a)).map(a => a.replace("_", " "))}</div>
    </div>
    <hr/>
      <h1>{course.name}</h1>
    <div className="list-group rounded-0">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item list-group-item-primary ${pathname.includes(link) && "active"} override-bs`}>
            {link.replace("_", " ")}
        </Link>
      ))}
    </div>
    </div>
  );
}


export default CourseNavigation;