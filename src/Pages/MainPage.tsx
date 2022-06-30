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

  const foodData: FoodItemProps[] = [
    {
      imgSrc: "food/pizza/crispy-mixed-pizza-with-olives-sausage.jpg",
      title: "Cheese Burst Mushroom",
      rating: 3,
      price: 7.49,
    },
    {
      imgSrc: "food/pizza/crispy-mixed-pizza-with-olives-sausage.jpg",
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

  return (
    <>
      {/* <NavBar /> */}
      {/* <SideBar /> */}
      <div className="app-area">
        <div className="menu-page">
          <SearchBox />
          <MenuCategoryList activeIndex={1} data={menuData}></MenuCategoryList>
          <FoodItemList foodData={foodData}></FoodItemList>
          {/* <FoodItemList foodData={foodData}></FoodItemList> */}
          {/* <FoodItemList foodData={foodData}></FoodItemList> */}
          {/* <FoodItemList foodData={foodData}></FoodItemList> */}
        </div>
        {/* <div className="checkout-box">checkout</div> */}
      </div>
    </>
  );
}
