import React from "react";

const NavMenu = () => {
  return (
    <nav className="nav-container">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#home">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="#calendar">Calendario</a>
        </li>
        <li className="nav-item">
          <a href="#my-week">Mi semana</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
