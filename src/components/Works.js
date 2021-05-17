import { useState } from "react";
import "./Works.scss";

const DATA = [
  {
    id: "1",
    icon: "https://static.thenounproject.com/png/1760714-200.png",
    title: "Genshin Info Randomizer",
    desc: "A web app built using React that displays random statistics from Genshin Impact",
    img: "https://i.ibb.co/tLWTr2R/genshin-website.png",
  },
  {
    id: "2",
    icon: "https://static.thenounproject.com/png/1760714-200.png",
    title: "MORE WEB APPS COMING SOON",
    desc: "Make more practical websites, and help me furthur improve my familiarity with web development!",
    img: "https://64.media.tumblr.com/b069a5ba34adfc7df6e3b1d045deafc3/5f8e36864477237e-27/s2048x3072/7926a24630220646ff4b0e4f3154ae20ea17bfb9.jpg",
  },
  {
    id: "3",
    icon: "https://www.freepnglogos.com/uploads/discord-logo-png/concours-discord-cartes-voeux-fortnite-france-6.png",
    title: "DISCORD BOT COMING SOON",
    desc: "Okay, this one is for fun.",
    img: "https://miro.medium.com/max/7680/1*yTj_mpxvNFiu1yH-JRyoFw.png",
  },
];

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < 2 ? currentSlide + 1 : 0);
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
                  <p>{d.desc}</p>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt=""></img>
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
