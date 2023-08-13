import { useCallback, useState } from "react";
import cls from "./InfoHeader.module.scss";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { useAppSelector } from "../../../shared/utils/hooks/hooks";
import { Link } from "react-router-dom";
import { AuthForm } from "../../AuthForm";

export const InfoHeader = () => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const user = useAppSelector((state) => state.user.user);
    const isAdmin = user?.isAdmin;
    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    return (
        <div className={cls.infoHeader}>
            <div className={cls.container}>
                <div className={cls.infoHeaderContent}>
                    <p className={cls.city}>Урус-Мартан</p>
                    <p className={cls.phone}>+7 (967) 000-77-27</p>

                    {user ? (
                        <div className={cls.authUserPanel}>
                            {isAdmin && (
                                <Link to={"/admin"}>
                                    <div className={cls.adminPanel}>Админка</div>
                                </Link>
                            )}
                            <span className={cls.logoutBtn}>
                                <Link to={`/profile`}>{user?.login}</Link>
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
