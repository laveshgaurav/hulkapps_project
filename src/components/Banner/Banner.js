import React from "react";
import { useSelector } from "react-redux";
import { dummyData } from "../../DummyData";
import CardItem from "../CardItem/CardItem";
import Styles from "./Banner.module.scss";

function Banner() {
  const { cart } = useSelector((state) => state?.Cart);

  return (
    <div className={Styles.Banner_Container}>
      {/* {cart?.length} */}
      {dummyData.slice(2, 6).map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Banner;
