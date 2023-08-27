import { classNames } from "../../../shared/utils/classNames/classNames";
import { Logo } from "../../../shared/ui/Logo/Logo";
import { Menu } from "../../../shared/ui/Menu/Menu";
import { Search } from "../../Search";
import cls from "./Navbar.module.scss";
import { memo } from "react";

interface NavbarProps {
    className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
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
});
