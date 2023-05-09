import cls from "./Logo.module.scss";

export const Logo = () => {
    return (
        <div className={cls.logoBlock}>
            <h2 className={cls.logoAqua}>АКВА</h2>
            <h2 className={cls.logoTerm}>ТЕРМ</h2>
        </div>
    );
};
