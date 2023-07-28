import { useCallback,  useState } from "react";
import cls from "./InfoHeader.module.scss";
import { Modal } from "../../../shared/ui/Modal/Modal";
import {  useAppSelector } from "../../../shared/utils/hooks/hooks";
import { Link } from "react-router-dom";
import { AuthForm } from "../../AuthForm";

export const InfoHeader = () => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const user = useAppSelector((state) => state.user.user);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <div className={cls.infoHeader}>
            <div className={cls.container}>
                <Link to={"/admin"}>Админка</Link>
                <Link to={"/profile"}>Личный кабинет</Link>
                <div className={cls.infoHeaderContent}>
                    <p className={cls.city}>Урус-Мартан</p>
                    <p className={cls.phone}>+7 (967) 000-77-27</p>
                    {user ? (
                        <div>
                            <span className={cls.logoutBtn}>
                                <Link to={"/profile"}>{user?.login}</Link>
                            </span>
                        </div>
                    ) : (
                        <button onClick={handleOpenModal} className={cls.btn}>
                            Войти
                        </button>
                    )}
                </div>
            </div>
            {isAuthModal && (
                <Modal isOpen={isAuthModal} onClose={handleCloseModal}>
                    <AuthForm onSuccess={handleCloseModal} />
                </Modal>
            )}
        </div>
    );
};
