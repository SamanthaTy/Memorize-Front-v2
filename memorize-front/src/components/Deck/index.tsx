import React from "react";
import "./styles.scss";

const Deck = () => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <h3 className="title">Nom du deck</h3>
            <p>15 cartes</p>
            <ul>
              <li>Easy : 5</li>
              <li>Medium : 5</li>
              <li>Hard : 5</li>
            </ul>
            <button className="session-btn">START</button>
            <button className="edit-btn">Modifier</button>
            <button className="delete-btn">Supprimer</button>
        </div>
    </div>
</div>
  )
}

export default Deck;
