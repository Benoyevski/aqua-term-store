import { Link } from "react-router-dom";
import cls from "./Menu.module.scss";
import { menuList } from "../../utils/const/common";
import { useMemo } from "react";

export const Menu = () => {
    const memoMenuList = useMemo(
        () =>
            menuList.map((item) => {
                return (
                    <li key={item.title} className={cls.menuItemWrapper}>
                        <Link to={item.path} className={cls.menuItem} key={item.title}>
                            {item.title}
                        </Link>
                    </li>
                );
            }),
        [],
    );
    return <ul className={cls.menu}>{memoMenuList}</ul>;
};
