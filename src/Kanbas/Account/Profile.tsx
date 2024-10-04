export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <div id="wd-signup-screen">
        <form id="wd-signup-form">
          <div className="form-group">
            <h3>Profile</h3>
            <input id="wd-username" className="form-control w-100 mb-2" placeholder="username" />
            <input id="wd-password" className="form-control w-100 mb-2" placeholder="password" type="password" />
            <input id="wd-firstname" className="form-control w-100 mb-2" value="Alice" placeholder="First Name" />
            <input id="wd-lastname" className="form-control w-100 mb-2" value="Wonderland" placeholder="Last Name" />
            <input id="wd-dob" className="form-control w-100 mb-2" value="2000-01-01" type="date" />
            <input id="wd-email" className="form-control w-100 mb-2" value="alice@wonderland" type="email" />
            <input id="wd-role" className="form-control w-100 mb-2" value="User" type="role" />
            <button id="wd-signup-btn" className="btn btn-danger w-100 mb-2">Sign out</button>
          </div>
        </form>
      </div>
    </div>
);}
