import styles from "./InfoHeader.module.scss";

export const InfoHeader = () => {
    return (
        <div className={styles.infoHeaderWrapper}>
            <div className={styles.infoHeaderContent}>
            <p className={styles.city}>Урус-Мартан</p>
            <p className={styles.phone}>+7 (800) 755-35-35</p>
            <button className={styles.btn}>Войти</button>
            </div>
        </div>
    );
};
