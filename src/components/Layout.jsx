import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Layout = () => {
  const {theme, handleOnClick} = useContext(ThemeContext);
  return (
    <div>
      <h4>Layout Theme Color : {theme} </h4>
        <button className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} btn-dark btn-lg border`} onClick={handleOnClick}>{theme === "dark" ? "light" : "dark"}</button>
    </div>
  );
}

export default Layout;