import React from "react";
import Image from "../Image";

const ListItem = (props) => {
  return (
    <li>
      <div className="box-img">
        <Image img="../../../../img.png" />
      </div>
      <h3 className="servico-title">{props.title} </h3>
      <p className="servico-info">{props.subtitle}</p>
    </li>
  );
};
export default ListItem;
