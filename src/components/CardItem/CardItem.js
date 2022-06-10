import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Styles from "./CardItem.module.scss";

function CardItem({ item }) {
  // dispatch
  const dispatch = useDispatch();
  // states
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [price, setPrice] = useState(null);

  useEffect(() => {
    console.log("item");
    setData(item);
  }, []);

  return (
    <div className={Styles.CardItem_Container}>
      <img src={data?.images[currentIndex]?.src} alt="" />
      <div className={Styles.Title}>
        <p>{`${data?.title?.split(" ")[0]} ${data?.title?.split(" ")[1]}`}</p>
        <p>
          {data?.variants[0].id === data?.images[currentIndex]?.variant_ids[0]
            ? data?.variants[0].price
            : null}
        </p>
      </div>
      <div className={Styles.Variants}>
        {data?.images?.map((item, index) => (
          <button
            className={currentIndex === index ? "ActiveBtn" : "InactiveBtn"}
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        disabled={
          data?.variants[0].id !== data?.images[currentIndex]?.variant_ids[0]
        }
        className={Styles.AddToCart}
        onClick={() => {
          dispatch({
            type: "ADD_TO_CART",
            payload: {
              id: data.id,
              title: data?.title,
              variants: data?.variants,
              images: data?.images[currentIndex],
              price: +data?.variants[0].price,
              quantity: 1,
            },
          });
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
}

export default CardItem;
