import { Link } from "react-router-dom";
import cls from "./Footer.module.scss";
import { memo } from "react";



export const Footer = memo(() => {
    return (
        <footer className={cls.Footer}>
            <div className={cls.container}>
                <ul className={cls.sections}>
                    <li>
                        О магазине
                        <Link to={"/about"}>
                            <p>Приветствие</p>
                        </Link>
                        <Link to={"/blog"}>
                            <p>Наш блог</p>
                        </Link>
                        <Link to={"/fabricators"}>
                            <p>Производители</p>
                        </Link>
                        <Link to={"/"}>
                            <p>Сертификаты</p>
                        </Link>
                    </li>
                    <li className={cls.footerHelp}>
                        Помощь
                        <Link to={"/contants"}>
                            <p>Как к нам добраться?</p>
                        </Link>
                    </li>
                    <li>
                        Контакты
                        <p>+7 (967) 000-77-27 E</p>
                        <p>mansur@dzhan.ru</p>
                        <p>г.Урус-Мартан, ул. Нурди Усамова 49</p>
                    </li>
                </ul>

                <hr />
                <p>2023 © интернет-магазин AQUATERM. Чеченская Республика, г.Урус-Мартан </p>
            </div>
        </footer>
    );
});
