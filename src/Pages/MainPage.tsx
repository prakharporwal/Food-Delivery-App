import React, { useContext, createContext, useState } from "react";
import { CartListContext } from "../Components/CartListContext";
import { CheckoutBox, CartItem } from "../Components/CheckoutBox";
import { FoodItemProps } from "../Components/FoodItem";
import { FoodItemList } from "../Components/FoodItemList";
import { MenuCategoryItemProps } from "../Components/MenuCategoryItem";
import { MenuCategoryList } from "../Components/MenuCategoryList";
import { NavBar } from "../Components/NavBar";
import { SearchBox } from "../Components/SearchBox";
import "./MainPage.css";

export default function MainPage() {
  const menuData: MenuCategoryItemProps[] = [
    {
      iconSrc: "menu/burger.png",
      title: "burger",
    },
    {
      iconSrc: "menu/pizza.png",
      title: "pizza",
    },
    {
      iconSrc: "menu/hotdog.png",
      title: "hotdog",
    },
    {
      iconSrc: "menu/tacos.png",
      title: "taco",
    },
    {
      iconSrc: "menu/drink.png",
      title: "drink",
    },
  ];

  let checkoutList: CartItem[] = [
    {
      itemName: "HotDog",
      quantity: 2,
      price: 30,
      imgUrl: "",
    },
    {
      itemName: "Cheese Burger",
      quantity: 2,
      price: 30,
      imgUrl: "",
    },
    {
      itemName: "Cheese Burger with Cola",
      quantity: 2,
      price: 30,
      imgUrl: "",
    },
  ];

  const foodData: FoodItemProps[] = [
    {
      imgSrc: "food/pizza/crispy-mixed-pizza-with-olives-sausage.jpg",
      title: "Cheese Burst Mushroom",
      rating: 3,
      price: 7.49,
    },
    {
      imgSrc: "food/pizza/mushroom.png",
      title: "Sausage pizza with olives",
      rating: 3.8,
      price: 10.59,
    },
    {
      imgSrc: "food/pizza/crispy-mixed-pizza-with-olives-sausage.jpg",
      title: "Sausage pizza with olives",
      rating: 3.8,
      price: 10.59,
    },
  ];

  const [cartList, setCartList] = useState(checkoutList);
  const CartListProvider = useContext(CartListContext);

  const addToList = (item: CartItem) => {
    let newProducts: CartItem[] = cartList;
    newProducts.push(item);
    setCartList(newProducts);
  };

  const removeFromCart = (item: CartItem) => {
    let updatedCart: CartItem[] = cartList;

    let index = cartList.indexOf(item);
    if (index > -1) {
      updatedCart.splice(index, 1);
    }
    setCartList(updatedCart);
  };

  return (
    <CartListContext.Provider
      value={{
        cartList: cartList,
        addToCart: addToList,
        removeFromCart: removeFromCart,
      }}
    >
      <NavBar />
      {/* <SideBar /> */}
      <div className="app-area">
        <div className="menu-page">
          <SearchBox />
          <MenuCategoryList activeIndex={1} data={menuData}></MenuCategoryList>
          <FoodItemList foodData={foodData}></FoodItemList>
          <FoodItemList foodData={foodData}></FoodItemList>
          <FoodItemList foodData={foodData}></FoodItemList>
          <FoodItemList foodData={foodData}></FoodItemList>
        </div>
        <div className="checkout-box">
          <CheckoutBox cartList={cartList} />
        </div>
      </div>
    </CartListContext.Provider>
  );
}
