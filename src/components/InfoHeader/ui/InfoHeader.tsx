import cls from "./InfoHeader.module.scss";

export const InfoHeader = () => {
    return (
        <div className={cls.infoHeader}>
            <div className={cls.container}>
                <div className={cls.infoHeaderContent}>
                    <p className={cls.city}>Урус-Мартан</p>
                    <p className={cls.phone}>+7 (967) 000-77-27</p>
                    <button className={cls.btn}>Войти</button>
                </div>
            </div>
        </div>
    );
};
