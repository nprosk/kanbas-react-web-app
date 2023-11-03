import { React } from "react";
import { Link } from "react-router-dom";
import {TfiWrite} from "react-icons/tfi";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  return (
    <div className="ms-2 mt-2">
      <h1>Dashboard</h1>
      <hr/>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} >
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>


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
                <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

                <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>

            </div>
          </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;