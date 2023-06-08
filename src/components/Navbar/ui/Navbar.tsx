import { classNames } from "../../../shared/classNames/classNames";
import { Logo } from "../../../shared/ui/Logo/Logo";
import { Menu } from "../../../shared/ui/Menu/Menu";
import { Search } from "../../Search";
import cls from "./Navbar.module.scss";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <header className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.navbarContent}>
                    <Logo />
                    <Menu />
                    <Search />
                </div>
            </div>
        </header>
    );
};
