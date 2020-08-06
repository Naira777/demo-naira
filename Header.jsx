import React from "react";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import Headernew from "./Headernew";

const HeaderFirst = (props) => {
  return (
    <>
      <header className={s.header}>
        <img src="https://futureofworking.com/wp-content/uploads/2015/06/advantages-and-disadvantages-of-social-networking.png" />

        <div className={s.loginBlock}>
          {props.isAuth ? (
            <div>
              {props.login} - <button onClick={props.logout}> Log out </button>
            </div>
          ) : (
            <NavLink to={"/login"}> Login </NavLink>
          )}
        </div>
      </header>
    </>
  );
};

export default HeaderFirst;
