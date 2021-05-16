import "./Topbar.scss";
import { Mail, Person } from "@material-ui/icons";

const TopBar = (props) => {
  return (
    <div className={"topbar " + (props.menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Henry Guo!
          </a>
          <div className="itemContainer">
            <Person className="icon"></Person>
            <span>+16478237588</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"></Mail>
            <span>henry.k.guo@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>props.setMenuOpen(!props.menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
