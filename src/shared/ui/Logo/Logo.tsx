import { Link } from "react-router-dom";
import cls from "./Logo.module.scss";

export const Logo = () => {
    return (
        <Link to={"/"}>
            <div className={cls.logoBlock}>
                <span>
                    <img src="aquaterm-icon.jpg" alt="" />
                </span>
                <h2 className={cls.logoAqua}>АКВА</h2>
                <h2 className={cls.logoTerm}>ТЕРМ</h2>
            </div>
        </Link>
    );
};
