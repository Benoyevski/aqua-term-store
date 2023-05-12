import { classNames } from "../../../shared/classNames/classNames";
import { Logo } from "../../../shared/ui/Logo/Logo";
import { Menu } from "../../../shared/ui/Menu/Menu";
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
