import { useCallback, useState } from "react";
import cls from "./InfoHeader.module.scss";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { LoginForm } from "../../LoginForm";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { logout } from "../../../features/userSlice";

export const InfoHeader = () => {
    const dispatch = useAppDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const token = useAppSelector((state) => state.user.token);
    const login = localStorage.getItem("login");

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
    };

    return (
        <div className={cls.infoHeader}>
            <div className={cls.container}>
                <div className={cls.infoHeaderContent}>
                    <p className={cls.city}>Урус-Мартан</p>
                    <p className={cls.phone}>+7 (967) 000-77-27</p>
                    {token ? (
                        <div>
                            <span>{login}</span>
                            <span onClick={handleLogout} className={cls.logoutBtn}>
                                Выйти
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
                    <LoginForm onSuccess={handleCloseModal} />
                </Modal>
            )}
        </div>
    );
};
