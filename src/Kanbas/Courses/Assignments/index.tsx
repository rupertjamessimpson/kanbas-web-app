import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegSave } from "react-icons/fa";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="input-group" style={{ width: "200px" }}>
          <span className="input-group-text" id="basic-addon1">
            <FaMagnifyingGlass />
          </span>
          <input
            id="wd-search-assignment"
            className="form-control"
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <button id="wd-add-assignment-group" className="btn btn-secondary me-2">+Group</button>
          <button id="wd-add-assignment" className="btn btn-danger">+Assignment</button>
        </div>
      </div>
      <ul id="wd-assignment-list" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between"> 
            <h4>ASSIGNMENTS</h4>
            <h4>40% of total</h4>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
              <BsThreeDotsVertical />
              <FaRegSave />
              <div>
                <a className="wd-assignment-link" href="/Kanbas/Courses/1234/Assignments/123">
                  A1 - ENV + HTML
                </a>
                <p>
                  Multiple Module | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 points
                </p>
              </div>
              <GreenCheckmark />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
              <BsThreeDotsVertical />
              <FaRegSave />
              <div>
                <a className="wd-assignment-link" href="/Kanbas/Courses/1234/Assignments/123">
                  A2 - ENV + HTML
                </a>
                <p>
                  Multiple Module | Not available until May 13 at 12:00am | Due May 13 at 11:59pm | 100 points
                </p>
              </div>
              <GreenCheckmark />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center" style={{ borderLeft: "4px solid green" }}>
              <BsThreeDotsVertical />
              <FaRegSave />
              <div>
                <a className="wd-assignment-link" href="/Kanbas/Courses/1234/Assignments/123">
                  A3 - ENV + HTML
                </a>
                <p>
                  Multiple Module | Not available until May 20 at 12:00am | Due May 13 at 11:59pm | 100 points
                </p>
              </div>
              <GreenCheckmark />
            </li>
          </ul>
        </li>
      </ul>
    </div>
);}
