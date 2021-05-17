import { useState } from "react";
import "./Works.scss";

const DATA = [
  { id: "1", icon: "", title: "Genshin Info Website", desc: "some stuff" },
  { id: "2", icon: "", title: "COMING SOON", desc: "COMING SOON" },
  { id: "3", icon: "", title: "COMING SOON", desc: "COMING SOON" },
];

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 1);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {DATA.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt=""></img>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                </div>
              </div>
              <div className="right">
                <img src="" alt=""></img>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow left"
        onClick={() => handleClick("left")}
      ></img>
      <img
        src="assets/arrow.png"
        alt=""
        className="arrow right"
        onClick={() => handleClick("right")}
      ></img>
    </div>
  );
};

export default Works;
