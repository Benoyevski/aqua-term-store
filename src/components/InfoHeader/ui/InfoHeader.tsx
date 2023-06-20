import { useCallback, useState } from "react";
import cls from "./InfoHeader.module.scss";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { LoginForm } from "../../LoginForm";

export const InfoHeader = () => {
    const [isAuthModal, setIsAuthModal] = useState(false);

    const handleOpenModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const handleSubmit = () => {};

    return (
        <div className={cls.infoHeader}>
            <div className={cls.container}>
                <div className={cls.infoHeaderContent}>
                    <p className={cls.city}>Урус-Мартан</p>
                    <p className={cls.phone}>+7 (967) 000-77-27</p>
                    <button onClick={handleOpenModal} className={cls.btn}>
                        Войти
                    </button>
                </div>
            </div>
            {isAuthModal && (
                <Modal isOpen={isAuthModal} onClose={handleCloseModal}>
                    <LoginForm onSuccess={handleSubmit} />
                </Modal>
            )}
        </div>
    );
};
