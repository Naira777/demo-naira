import React from "react";
import s from "./Headernew.module.css";
import { NavLink } from "react-router-dom";

const HeaderSecond = (props) => {
  return (
    <div className={s.navbar}>
      <a href="#home">Home</a>

      <NavLink to={"/photos"}> Photos </NavLink>

      <NavLink to={"/friends"}> My Friends </NavLink>

      <NavLink to={"/music"}> My Music </NavLink>

      <NavLink to={"/contact"}> My Contacts </NavLink>
    </div>
  );
};

export default HeaderSecond;
