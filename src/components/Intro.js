import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/IMG_3130.jpg" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Henry Guo</h1>
          <h3>I'm working on becoming a <span>developer :)</span></h3>
        </div>
        <a href='#portfolio'>
        <img src="assets/down.png" alt=''></img></a>
      </div>
    </div>
  );
};

export default Intro;
