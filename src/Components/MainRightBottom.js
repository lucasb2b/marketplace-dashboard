import React from "react";
import TopSeller from "./TopSeller";

function MainRightBottom() {
  return (
    <div className="bottomRightCard">
      <div className="bottomName">
        <h2>Top Vendedores</h2>
        <a href="http://localhost:3000">Ver mais</a>
      </div>

      {TopSeller &&
        TopSeller.map((seller) => (
          <div className="topSeller" key={seller?.id}>
            <div className="topSellerImg">
              <img src={seller?.imgSrc} alt="" />
            </div>

            <p className="topSellerName">
              {seller?.seller_name} <span>{seller?.username}</span>
            </p>

            <a href="http://localhost:3000" className="button1 btn">
              Seguir
            </a>
          </div>
        ))}
    </div>
  );
}

export default MainRightBottom;
