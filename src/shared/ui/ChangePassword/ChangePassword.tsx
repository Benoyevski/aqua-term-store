import { useState } from "react";
import { FiEye } from "react-icons/fi"; // Импортируйте иконку глаза
import cls from "./ChangePassword.module.scss";
import { changePassword } from "../../../features/userSlice";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";

export const ChangePassword = () => {
    const dispatch = useAppDispatch();

    const userId = useAppSelector((state) => state.user.user?._id);
    const [newPassword, setNewPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const passwordChangeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (newPassword && newPassword !== repeatedPassword) {
            alert("Пароли не совпадают");
        } else if (userId) {
            const result = await dispatch(changePassword({ id: userId, password: newPassword }));
            if (result.meta.requestStatus === "fulfilled") {
                alert("Пароль изменен");
                setNewPassword("");
                setRepeatedPassword("");
            }
        }
    };

    return (
        <div className={cls.ChangePassword}>
            <form onSubmit={passwordChangeSubmit}>
                <div className={cls.newPassword}>
                    <label htmlFor='newPassword'>Новый пароль</label>
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setNewPassword(e.target.value)
                        }
                        id='newPassword'
                        type={showPassword ? "text" : "password"}
                        required
                        value={newPassword}
                    />
                </div>
                <span className={cls.passwordIcon} onClick={() => setShowPassword(!showPassword)}>
                    <FiEye />
                </span>
                <div className={cls.newPassword}>
                    <label htmlFor='repeatPassword'>Введите новый пароль еще раз</label>
                    <input
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setRepeatedPassword(e.target.value)
                        }
                        id='repeatPassword'
                        type={showPassword ? "text" : "password"}
                        required
                        value={repeatedPassword}
                    />
                </div>
                <button type='submit' className={cls.savePasswordBtn}>
                    Сохранить изменения
                </button>
            </form>
        </div>
    );
};
