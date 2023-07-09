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
    private: "Личные данные",
    changePassword: "Сменить пароль",
    basket: "Корзина",
    wallet: "Кошелек",
};

export const profileTabs: IProfileTab[] = [
    {
        title: "Мой кабинет",
        path: "profile",
    },
    {
        title: "Личные данные",
        path: "profile/private",
        image: "icons/profile/pers.png",
    },
    {
        title: "Кошелек",
        path: "profile/wallet",
        image: "icons/profile/wallet.png",
    },
    {
        title: "Сменить пароль",
        path: "profile/changePassword",
        image: "icons/profile/pass.png",
    },
    {
        title: "Корзина",
        path: "basket",
        image: "icons/profile/basket.png",
    },
    {
        title: "Контакты",
        path: "contacts",
        image: "icons/profile/contacts.png",
    },
];
