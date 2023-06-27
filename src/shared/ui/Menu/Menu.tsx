import { Link } from "react-router-dom";
import cls from "./Menu.module.scss";
import { menuList } from "../../utils/const/common";

interface MenuProps {
    className?: string;
}

export const Menu = ({ className }: MenuProps) => {
    return (
        <ul className={cls.menu}>
            {menuList.map((item) => {
                return (
                    <li key={item.title} className={cls.menuItemWrapper}>
                        <Link to={item.path} className={cls.menuItem} key={item.title}>
                            {item.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
