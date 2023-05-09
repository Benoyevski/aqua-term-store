import { classNames } from "../../../shared/classNames/classNames";
import { Logo } from "../../../shared/ui/Logo/Logo";
import cls from "./Navbar.module.scss";

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

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.navbarContent}>
                    <Logo />
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
                    <div className={cls.search}>
                        <div className={cls.searchWrap}>
                            <img
                                className={cls.searchIcon}
                                src='src/shared/assets/search.png'
                                alt='lupa'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
