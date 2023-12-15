import React from "react";
import { useState } from "react";
//Header owns the isDarkMode state. It toggles button text based on the isDarkMode state.
//We want its header App(parent) to own state as well to change dark mode of App's className
//want App to own state as well to change dark mode of App's className
//Lifting state up
const Header = ({isDarkMode, onHandleClick}) => {

//isDarkMode state is passed down from App.js as it's needed for button text to change based on the isDarkMode state.
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={onHandleClick}>{buttonTextContent}</button>
    </header>
  );
};

export default Header;
