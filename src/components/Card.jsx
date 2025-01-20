import React from "react";

function Card(props){
    return(
        <div className="card" data-city={props.cityName}>
          <h3>{props.cityName}</h3>
          <p>{props.cityQuote}</p>
        </div>
    )
}

export default Card;