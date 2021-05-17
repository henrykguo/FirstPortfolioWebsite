import { useEffect, useState } from "react";
import "./Portfolio.scss";
import PortfolioList from "./PortfolioList";
import {
  featuredPortfolio,
  webAppPortfolio,
  botPortfolio,
  plannedPortfolio,
} from "../data";

const Portfolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web Apps",
    },
    {
      id: "bots",
      title: "Discord Bots",
    },
    {
      id: "planned",
      title: "Planned Projects",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webAppPortfolio);
        break;
      case "bots":
        setData(botPortfolio);
        break;
      case "planned":
        setData(plannedPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          ></PortfolioList>
        ))}
      </ul>
      <div className="container">
      {data.map((d) => (
        <div className="item">
          <img src={d.img} alt=""></img>
          <h3>{d.title}</h3>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Portfolio;
