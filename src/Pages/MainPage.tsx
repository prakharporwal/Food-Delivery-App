import { MenuCategoryList } from "../Components/MenuCategoryList";
import { NavBar } from "../Components/NavBar";
import { SearchBox } from "../Components/SearchBox";
import "./MainPage.css";

export default function MainPage() {
  const data = [
    {
      iconSrc: "menu/pizza.png",
      title: "pizza",
    },
    {
      iconSrc: "menu/burger.png",
      title: "burger",
    },
  ];

  return (
    <div className="main-app">
      Work In Progress
      <NavBar />
      <SearchBox />
      <MenuCategoryList activeIndex={1} data={data}></MenuCategoryList>
    </div>
  );
}
