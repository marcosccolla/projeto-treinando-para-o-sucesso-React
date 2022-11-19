import React from "react";

const BannerServico = (props) => {
  return (
    <div class="banner-new">
      <div className="banner-new-text">
        <h6>{props.subtitle} </h6>
        <h1>{props.title} </h1>
        <input type={props.typeEnter} placeholder={props.placeholderEnter} />
      </div>
      <div className="banner-write-cor">
        <div className="banner-write">
          <p>{props.servicoTitle} </p>
          <h4>{props.servicoMessage}</h4>
          <input
            type={props.typeMessage}
            placeholder={props.placeholderMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default BannerServico;
