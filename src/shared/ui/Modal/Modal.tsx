import { useState } from "react";
import { Mods, classNames } from "../../utils/classNames/classNames";
import cls from "./Modal.module.scss";
import { Portal } from "../Portal/Portal";
import { useAppDispatch } from "../../utils/hooks/hooks";
import { clearError } from "../../../features/userSlice";

interface ModalProps {
    className?: string;
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const dispatch = useAppDispatch()

    const closeHandler = () => {
        if (onClose) {
            dispatch(clearError())
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
