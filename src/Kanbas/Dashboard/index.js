import { Link } from "react-router-dom";
import db from "../Database";
import {TfiWrite} from "react-icons/tfi";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="ms-2 mt-2">
      <h1>Dashboard</h1>
      <hr/>
      <div class="ms-4">
                <h3>Published Courses</h3>
                <hr />
      <div className="d-flex flex-row flex-wrap">
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="card m-3 text-decoration-none" style={{width: "250px"}}>
            <img src={course.image} className="card-img-top" alt={course.name} />
            <div className="card-body">
                <h5 className="card-subtitle" style={{color : "#87CEEB"}}>
                    {course.number}
                    </h5>
            <h2 className="card-title">
            {course.name}
                </h2>
                <TfiWrite/>

            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;