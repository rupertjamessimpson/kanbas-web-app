export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment"
             placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="/Kanbas/Courses/1234/Edit">
            A1 - ENV + HTML
          </a>
          <p>
            Multiple Module | Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 points
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="/Kanbas/Courses/1234/Edit">
            A1 - CSS + BOOTSTRAP
          </a>
          <p>
            Multiple Module | Not available until May 13 at 12:00am | Due May 20 at 11:59pm | 100 points
          </p>
        </li>
        <li className="wd-assignment-list-item">
          <a className="wd-assignment-link"
            href="/Kanbas/Courses/1234/Edit">
            A1 - JAVASCRIPT + REACT
          </a>
          <p>
            Multiple Module | Not available until May 20 at 12:00am | Due May 27 at 11:59pm | 100 points
          </p>
        </li>
      </ul>
    </div>
);}
