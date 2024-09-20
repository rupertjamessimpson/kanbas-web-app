export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select>
              <option id="wd-group" value="1">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select>
              <option id="wd-display-grade-as" value="1">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
              <option id="wd-submission-type" value="1">Online</option>
            </select>
          </td>
        </tr>
        <tr>
          <label htmlFor="entry-options">Online Entry Options</label>
          <br />      
          <input type="checkbox" name="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
          <br />      
          <input type="checkbox" name="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
          <br />      
          <input type="checkbox" name="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
          <br />      
          <input type="checkbox" name="wd-student-annotations" />
          <label htmlFor="wd-student-annotations">Student Annotations</label>
          <br />
          <input type="checkbox" name="wd-file-upload" />
          <label htmlFor="wd-file-upload">File Upload</label>
          <br />
        </tr>
        <tr>
          <label htmlFor="wd-assign-to">Assign to</label>
          <input id="wd-assign-to" value="Everyone" />
        </tr>
        <tr>
          <label htmlFor="wd-due-date">Due</label>
          <br />
          <input type="date" id="wd-due-date" value="2024-05-13" />
        </tr>
        <tr>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
            <br />
            <input type="date" id="wd-available-from" value="2024-05-13" />
          </td>
          <td>
            <label htmlFor="wd-available-to">Available to</label>
            <br />
            <input type="date" id="wd-available-to" value="2024-05-20" />
          </td>
        </tr>
      </table>
      <hr />
      <button>Cancel</button>
      <button>Save</button>
    </div>
);}
