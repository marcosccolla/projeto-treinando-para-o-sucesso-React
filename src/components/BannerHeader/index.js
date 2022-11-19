import React from "react";
import Image from "../Image";

const BannerHeader = (props) => {
  return (
    <>
      <div className="banner-conteudo">
        <p className="banner-subtitle">{props.title} </p>
        <h2 className="banner-title">{props.subtitle} </h2>
        <h6 className="banner-info">{props.menssage}</h6>
        <a className="banner-acao" href="#">
          {props.nameButton}
        </a>
      </div>
      <div className="banner-img">
        <Image img={props.img} />
      </div>
    </>
  );
};
export default BannerHeader;
