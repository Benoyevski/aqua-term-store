import { classNames } from "../../classNames/classNames";
import cls from "./Menu.module.scss";

interface IMenuList {
    title: string;
    childrens?: Array<string>;
}

let menuList: IMenuList[] = [
    {
        title: "Каталог",
        childrens: ["Котлы", "Радиаторы", "Водонагреватели", "Кондиционеры"],
    },
    {
        title: "Производители",
    },
    {
        title: "Акции",
    },
    {
        title: "О компании",
        childrens: ["Лицензии", "Персональные данные"],
    },
    {
        title: "Контакты",
    },
];


interface MenuProps {
    className?: string;
}

export const Menu = ({ className }: MenuProps) => {
    return (
        <ul className={cls.menu}>
            {menuList.map((item) => {
                return (
                    <li className={cls.menuItemWrapper}>
                        <p className={cls.menuItem} key={item.title}>
                            {item.title}
                        </p>
                    </li>
                );
            })}
        </ul>
    );
};
