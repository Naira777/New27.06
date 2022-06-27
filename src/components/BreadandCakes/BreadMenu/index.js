import React, { useEffect, useState } from "react";
import s from "./index.module.css";
import { NavLink } from "react-router-dom";

function BreadMenu() {
 
 
  return (
    <div className={s.Box}>
      <NavLink
        to="all"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
        Բոլորը
      </NavLink>

      <NavLink
        to="bread"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
        Հաց{" "}
      </NavLink>

      <NavLink
        to="dessert"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
        Թխվածք{" "}
      </NavLink>

      <NavLink
        to="sweets"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
        Խմորեղեն{" "}
      </NavLink>

      <NavLink
        to="cakes"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
        Տորթ{" "}
      </NavLink>

      <NavLink
        to="drybread"
        className={s.link}
        style={({ isActive }) => ({
          color: isActive ? "#fff" : "#545e6f",
          background: isActive ? "#3D9A85" : "#f0f0f0",
        })}
      >
        Սուխարիկներ{" "}
      </NavLink>
    </div>
  );
}

export default BreadMenu;
