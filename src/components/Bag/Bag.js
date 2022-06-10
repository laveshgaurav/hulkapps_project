import React from "react";
import { useSelector } from "react-redux";
import BagItem from "../BagItem/BagItem";
import Styles from "./Bag.module.scss";

function Bag({ hideBag }) {
  // selector
  const { cart } = useSelector((state) => state?.Cart);
  return (
    <div className={Styles.Bag_Container}>
      <div className={Styles.Bag}>
        <div className={Styles.Items}>
          <div className={Styles.Header}>
            <h2>
              YOUR BAG <span>({cart.length} ITEMS)</span>
            </h2>
            <button onClick={hideBag}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className={Styles.Items_Container}>
            {cart.map((item) => (
              <BagItem item={item} key={item.id} />
            ))}
          </div>
        </div>
        <div className={Styles.Checkout}>
          <div className={Styles.Total}>
            <h3>SUBTOTAL</h3>
            <h3>
              ${" "}
              {cart.reduce((acc, curr) => {
                return (acc = acc + curr.price * curr.quantity);
              }, 0)}
            </h3>
          </div>
          <button>
            <i className="fa-solid fa-bag-shopping"></i> CHECKOUT
          </button>
          <p>
            Have a promo code? Enter your code at checkout.
            <br />
            Shipping & taxes are calculated during checkout.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bag;
