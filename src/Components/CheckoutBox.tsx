import React, { ReactNode, useEffect, useState } from "react";
import { IconButton, RCSecondaryButton } from "./Button";
import { useCart } from "./CartListContext";
import { SiFoodpanda } from "react-icons/si";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./CheckoutBox.css";

export type CartItem = {
  itemName: string;
  quantity: number;
  price: number;
  imgUrl: string;
};

interface IProps {
  cartList: CartItem[];
  children?: ReactNode;
}

const CheckoutBox: React.FunctionComponent<IProps> = ({ cartList }) => {
  const calculateTotal = (): number => {
    let result = 0;
    for (let index = 0; index < cartList.length; index++) {
      let item = cartList[index];
      result = result + item.quantity * item.price;
    }
    return result;
  };

  const [totalAmount, setTotalAmount] = useState(calculateTotal());

  useEffect(() => {
    setTotalAmount(calculateTotal());
    console.log(totalAmount);
  }, [cartList]);

  return (
    <>
      <div className="checkout">
        <div className="credit-card">
          <img src={"credit_card.png"} alt="payment-card" />
          <div>
            Paying via Card <b>3523</b>
          </div>
        </div>
        <ul className="nav-list">
          <div className="list-heading">Cart</div>
          {/* <li>
            <span className="nav-item">
              <IconButton alt="wallet">
                <FontAwesomeIcon icon={faHome} />
              </IconButton>
            </span>
          </li>
          <li>
            <span className="nav-item">
              <IconButton alt="wallet"></IconButton>
            </span>
          </li>
          <li>
            <span className="nav-item">
              <IconButton alt="wallet"></IconButton>
            </span>
          </li>

          <li>
            <span className="nav-item">
              <IconButton alt="wallet"></IconButton>
            </span>
          </li> */}
          {cartList.map((item) => {
            return (
              item.quantity > 0 && <CheckoutItem item={item}></CheckoutItem>
            );
          })}
        </ul>
        <div className="total-amount-div">
          <span>Total</span>
          <span>{"USD " + totalAmount}</span>
        </div>
      </div>
    </>
  );
};

type checkoutItemProps = {
  item: CartItem;
};

const CheckoutItem: React.FunctionComponent<checkoutItemProps> = (props) => {
  let cartContext = useCart();
  const handleClick = () => {
    console.log(props.item);
    cartContext.removeFromCart(props.item);
  };

  return (
    <li className="list-item">
      <IconButton>
        <SiFoodpanda />
      </IconButton>
      <span className="cart-item">
        <span className="item-name">{props.item.itemName}</span>
        <span>{props.item.quantity}</span>
        <span>{"x"}</span>
        <span>{props.item.price}</span>
      </span>
      <RCSecondaryButton
        className="delete-cart-item-button"
        onClick={handleClick}
      >
        Delete
      </RCSecondaryButton>
    </li>
  );
};

export { CheckoutBox };
