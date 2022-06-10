import React from "react";
import { useSelector } from "react-redux";
import Styles from "./Header.module.scss";

function Header({ showbag }) {
  // selector
  const { cart } = useSelector((state) => state?.Cart);
  return (
    <div className={Styles.Header_Container}>
      <h1>HULK/apps{">"}</h1>
      <h2>Featured Collection</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        <br />
        pulvinar ac tortor imperdiet commodo.
      </p>
      <button onClick={showbag}>
        <i className="fa-solid fa-bag-shopping"></i>
        <span>{cart?.length}</span>
      </button>
    </div>
  );
}

export default Header;
