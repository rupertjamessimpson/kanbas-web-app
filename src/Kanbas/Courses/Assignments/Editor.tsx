export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" className="form-control w-50" value="A1 - ENV + HTML" />
          </div>
          <div className="mb-3">
            <textarea className="form-control w-50" id="wd-description">
              The assignment is available online Submit a link to the landing page of
            </textarea>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-points" className="me-3">Points</label>
            <input className="form-control w-50" id="wd-points" value={100} />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-group" className="me-3">Assignment Group</label>
            <select className="form-control w-50">
              <option id="wd-group" value="1">ASSIGNMENTS</option>
            </select>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-display-grade-as" className="me-3">Display Grade as</label>
            <select className="form-control w-50">
              <option id="wd-display-grade-as" value="1">Percentage</option>
            </select>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-submission-type" className="me-3">Submission Type</label>
            <select className="form-control w-50">
              <option id="wd-submission-type" value="1">Online</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="entry-options">Online Entry Options</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="wd-text-entry" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="wd-website-url" id="wd-website-url" />
              <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="wd-media-recordings" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="wd-student-annotations" id="wd-student-annotations" />
              <label className="form-check-label" htmlFor="wd-student-annotations">Student Annotations</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="wd-file-upload" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Upload</label>
            </div>
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-assign-to" className="me-3">Assign to</label>
            <input className="form-control w-50" id="wd-assign-to" value="Everyone" />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-due-date" className="me-3">Due</label>
            <input className="form-control w-50" type="date" id="wd-due-date" value="2024-05-13" />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-available-from" className="me-3">Available from</label>
            <input className="form-control w-50" type="date" id="wd-available-from" value="2024-05-13" />
          </div>
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="wd-available-to" className="me-3">Available to</label>
            <input className="form-control w-50" type="date" id="wd-available-to" value="2024-05-20" />
          </div>
          <hr />
          <div className="d-flex">
            <button className="btn btn-secondary me-2">Cancel</button>
            <button className="btn btn-danger">Save</button>
          </div>
        </div>
      </form>
    </div>
  );
}
