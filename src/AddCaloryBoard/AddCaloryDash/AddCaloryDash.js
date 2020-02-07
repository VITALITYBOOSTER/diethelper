import React from "react";
import { NavLink } from "react-router-dom";

export default function AddCaloryDash(props) {
  return (
    <div className="add-caloury-dash">
      <span>{props.name}</span>
      <div className="button-click">
        <NavLink to={"/add" + props.path}>
          <img className="add-calory-dash-img-button" src='https://www.pngrepo.com/png/81184/170/plus.png'/>
        </NavLink>
      </div>
    </div>
  );
}
