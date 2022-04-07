import { MenuCategoryItem } from "./MenuCategoryItem";
import "./MenuCategoryList.css";

interface MenuData {
  iconSrc: string;
  title: string;
}

interface IProps {
  data: MenuData[];
  activeIndex: Number;
}

const MenuCategoryList: React.FunctionComponent<IProps> = (props) => {
  return (
    <div className="menu-category-list">
      {props.data.map((item: MenuData, index: Number) => {
        const activeClass = index === props.activeIndex ? "active-item" : "";

        return (
          <MenuCategoryItem
            className={activeClass}
            title={item.title}
            iconSrc={item.iconSrc}
          ></MenuCategoryItem>
        );
      })}
    </div>
  );
};

export { MenuCategoryList };
