import React from "react";

function MainRightTop() {
  return (
    <div className="topCard">
      <div className="topCard_name">
        <h2>Estatísticas</h2>
        <a href="http://localhost:3000">Ver Mais</a>
      </div>

      <div className="earning">
        <p>
          Artes Vendidas <span>187</span>
        </p>
        <p>
          Artes Canceladas <span>5</span>
        </p>
        <p>
          Artes Pendentes <span>25</span>
        </p>
        <p>
          Artes Entregues <span>200</span>
        </p>
        <p>
          Total de Ganhos <span>262 ETH</span>
        </p>
      </div>
    </div>
  );
}

export default MainRightTop;
