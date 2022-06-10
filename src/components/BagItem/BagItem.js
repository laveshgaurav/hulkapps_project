import React from "react";
import { useDispatch } from "react-redux";
import Styles from "./BagItem.module.scss";

function BagItem({ item }) {
  // dispatch
  const dispatch = useDispatch();
  return (
    <div className={Styles.BagItem_Container}>
      <div className={Styles.Image}>
        <img src={item?.images?.src} alt={item?.name} />
      </div>
      <div className={Styles.Details}>
        <div className={Styles.Top}>
          <p>{`${item.title.split(" ")[0].toUpperCase()} ${item.title
            .split(" ")[1]
            .toUpperCase()}`}</p>
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id,
              })
            }
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className={Styles.Bottom}>
          <div className={Styles.BtnContainer}>
            <button
              className={Styles.Decrease}
              onClick={() => {
                dispatch({
                  type: "DECREASE_QUANTITY",
                  payload: item.id,
                });
              }}
              disabled={item.quantity === 1}
            >
              -
            </button>
            <p>{item.quantity}</p>
            <button
              className={Styles.Increase}
              onClick={() => {
                dispatch({
                  type: "INCREASE_QUANTITY",
                  payload: item.id,
                });
              }}
            >
              +
            </button>
          </div>
          <p>$ {item.price}</p>
        </div>
      </div>
    </div>
  );
}

export default BagItem;
