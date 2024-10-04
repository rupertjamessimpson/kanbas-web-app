import React from "react";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <form id="wd-signup-form">
        <div className="form-group">
          <h3>Sign up</h3>
          <input id="wd-username" className="form-control w-100 mb-2" placeholder="username" />
          <input id="wd-password" className="form-control w-100 mb-2" placeholder="password" type="password" />
          <button id="wd-signup-btn" className="btn btn-primary w-100 mb-2">Sign up</button>
        </div>
        <a href="/Kanbas/Account/Signup" className="mt-3 d-block">Sign in</a>
      </form>
    </div>
);}
