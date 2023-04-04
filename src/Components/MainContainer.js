import React from "react";
import "./MainContainer.css";

import Banner from "../img/1.jpg";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import CardMain from "./CardMain";
import MainRightTop from "./MainRightTop";
import MainRightBottom from "./MainRightBottom";

function MainContainer() {
  return (
    <div className="mainContainer">
      <div className="left">
        <div
          className="banner"
          style={{
            background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="textContainer">
            <h1>Salão Redondo</h1>
            <h2>1.5 ETH</h2>
            <p>Enviado por Alexander Vernof</p>
            <div className="bid">
              <a href="http://localhost:3000" className="button1">
                Dar lance
              </a>
              <p>
                Termina em <span>2d:15h:20m</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              <h2>Feed</h2>
              <a href="http://localhost:3000" className="button2">
                Popular
              </a>
            </div>
            <div className="filter_buttons">
              <a href="http://localhost:3000" className="button1">
                Todos
              </a>
              <a href="http://localhost:3000" className="button2">
                Ilustração
              </a>
              <a href="http://localhost:3000" className="button2">
                Arte
              </a>
              <a href="http://localhost:3000" className="button2">
                Jogos
              </a>
            </div>
          </div>

          <main>
            <CardMain imgSrc={Card1} title={"Cubo do Trovão"} hearts={"65"} />
            <CardMain imgSrc={Card2} title={"Pokebola"} hearts={"45"} />
            <CardMain imgSrc={Card3} title={"Pirâmide de Deus"} hearts={"55"} />
            <CardMain imgSrc={Card4} title={"Cubo Impressionante"} hearts={"75"} />
            <CardMain imgSrc={Card5} title={"Estrela de Cristal"} hearts={"35"} />
            <CardMain imgSrc={Card6} title={"Passáro de Cristal"} hearts={"85"} />
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightTop />
        <MainRightBottom />
      </div>
    </div>
  );
}

export default MainContainer;
