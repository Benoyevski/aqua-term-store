import { useState } from "react";
import { Mods, classNames } from "../../classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);

    const closeHandler = () => {
        if (onClose) {
            setIsClosing(true);
            onClose();
        }
    };

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.Modal, mods, [className])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
