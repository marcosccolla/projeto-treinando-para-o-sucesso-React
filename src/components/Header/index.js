import React from "react";

const Header = () => {
  return (
    <div className="topo">
      <div className="logo">
        <p>BeatsLearning</p>
      </div>
      <div className="menu">
        <a href="#">Home</a>
        <a href="#">sobre</a>
        <a href="#">cursos</a>
        <a href="#">parceiros</a>
        <a href="#">contato</a>
      </div>
      <div className="acoes">
        <a href="#">cadastro</a>
        <a href="#" className="login">
          login
        </a>
      </div>
    </div>
  );
};
export default Header;
