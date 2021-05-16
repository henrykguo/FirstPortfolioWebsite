import "./Menu.scss";
const Menu = (props) => {
  return (
    <div className={"menu " + (props.menuOpen && "active")}>
      <ul>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>props.setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
