import React from "react";
import Image from "../Image";

const Card = (props) => {
  return (
    <div className="card-conteudo">
      <div className="card-img">
        <Image img={props.imageGrande} />
      </div>
      <div className="card-info">
        <div>
          <h2>{props.title} </h2>
          <p>{props.subtitle} </p>
        </div>

        <div className="card-content">
          <div className="card-desc">
            <span>{props.value} </span>
          </div>
          <div className="card-desc">
            <Image img={props.imageHours} />
            <span>{props.hours} </span>
          </div>
          <div className="card-desc">
            <Image img={props.imageArticles} />
            <span>{props.articles} </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
