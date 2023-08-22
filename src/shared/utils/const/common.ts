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
        title: "О магазине",
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
    blog: "Блог",
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

export const exceptPaths = [
    "/profile",
    "/contacts",
    "/basket",
    "/admin",
    "/profile/private",
    "/profile/wallet",
    "/profile/changePassword",
];

export const reviewsList = [
    {
        date: "18 ноября 2022",
        name: "Апти",
        text: "Магазин понравился, вежливое и участливое обслуживание, профессиональная Консультация, большой выбор качественного Оборудования и адекватные цены.",
        avatar: "reviewers/review1.png",
    },
    {
        date: "13 декабря 2022",
        name: "Ислам",
        text: "Это дикий восторг! Пришёл радиатор, который заказал через сайт. И он в жизни выглядит круче, чем на фото. Описание полностью соответствует. Идет размер в размер. До этого я заказывал здесь котел.",
        avatar: "reviewers/review2.jpg",
    },
    {
        date: "19 декабря 2022",
        name: "Адам",
        text: "Отличный магазин, хороший выбор. Продавцы на высшем уровне, подберут качественное оборудование по приемлемым ценам",
        avatar: "reviewers/review3.jpg",
    },
    {
        date: "22 января 2023",
        name: "Исраил",
        text: "Магазин бомба. Широкий ассортимент, очень компетентный специалист Виталий. Все спокойно и быстро объяснил. PS: красивая витрина. В общем, рекомендую, удобное расположение, лучшие цены",
        avatar: "reviewers/review4.jpg",
    },
];
