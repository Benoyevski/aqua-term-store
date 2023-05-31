import { classNames } from "../../../shared/classNames/classNames";
import cls from "./Footer.module.scss";

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    return (
        <footer className={classNames(cls.Footer, {}, [className])}>
            <div className={cls.container}>
                <ul className={cls.sections}>
                    <li>О магазине</li>
                    <li>Помощь</li>
                    <li>Контакты</li>
                </ul>

                <hr/>
                <p>2023 © интернет-магазин AQUATERM. Чеченская Республика, г.Урус-Мартан  </p>
            </div>
        </footer>
    );
};
