import { Link } from "react-router-dom";
export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation">
      <a href="https://www.northeastern.edu/" id="wd-neu-link" target="blank">Northeastern</a><br/>
      <Link to="/Kanbas/Account" id="wd-account-link">Account</Link><br/>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
      <Link to="/Kanbas/Courses" id="wd-course-link">Courses</Link><br/>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link">Calendar</Link><br/>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link">Inbox</Link><br/>
      <Link to="/labs/lab1" id="wd-labs-link">Labs</Link><br/>
      <br/>
      <Link to="/" id="wd-landing-link">Landing Page</Link><br/>
    </div>
);}
