export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <form id="wd-signin-form">
        <div className="form-group">
          <h3>Sign in</h3>
          <input id="wd-username" className="form-control w-100 mb-2" placeholder="username" />
          <input id="wd-password" className="form-control w-100 mb-2" placeholder="password" type="password" />
          <button id="wd-signin-btn" className="btn btn-primary w-100 mb-2">Sign in</button>
        </div>
        <a href="/Kanbas/Account/Signup" className="mt-3 d-block">Sign up</a>
      </form>
    </div>
);}
