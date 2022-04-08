import { MenuCategoryItem, MenuCategoryItemProps } from "./MenuCategoryItem";
import "./MenuCategoryList.css";
interface IProps {
  data: MenuCategoryItemProps[];
  activeIndex: Number;
}

const MenuCategoryList: React.FunctionComponent<IProps> = (props) => {
  return (
    <>
      <span className="menu-list-title">Menu Category</span>
      <div className="menu-category-list">
        {props.data.map((item: MenuCategoryItemProps, index: Number) => {
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
    </>
  );
};

export { MenuCategoryList };
