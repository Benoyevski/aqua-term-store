import { IMenuList, IProfileTab } from "../../types/types";

export const menuList: IMenuList[] = [
    {
        title: "Каталог",
        childrens: ["Котлы", "Радиаторы", "Обогреватели", "Кондиционеры", "Насосы"],
        path: "/catalog",
    },
    {
        title: "Производители",
        path: "/fabricators",
    },
    {
        title: "Акции",
        path: "/sale",
    },
    {
        title: "О компании",
        childrens: ["Лицензии", "Персональные данные"],
        path: "/about",
    },
    {
        title: "Контакты",
        path: "/contacts",
    },
];

export const routeNames: { [key: string]: string } = {
    catalog: "Каталог",
    about: "О сайте",
    contacts: "Контакты",
    fabricators: "Производители",
    sale: "Акции",
    profile: "Личный кабинет",
    admin: "Страница администратора",
    private: 'Личные данные',
    changePassword: 'Сменить пароль',
    basket: 'Корзина',
};

export const profileTabs: IProfileTab[] = [
    {
        title: "Мой кабинет",
        path: "profile",
    },
    {
        title: "Личные данные",
        path: "profile/private",
    },
    {
        title: "Сменить пароль",
        path: "profile/changePassword",
    },
    {
        title: "Корзина",
        path: "profile/basket",
    },
    {
        title: "Контакты",
        path: "contacts",
    },
];
