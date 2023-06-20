import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { classNames } from "../../../shared/classNames/classNames";
import { Input } from "../../../shared/ui/Input/Input";
import cls from "./LoginForm.module.scss";
import { register } from "../../../features/userSlice";

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

export const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const formReady = !login || !password || !email;

    const onLoginClick = () => {
        dispatch(register({ login, email, password }));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <input
                autoFocus
                placeholder={"Введите логин"}
                type='text'
                className={cls.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value)}
                value={login}
            />
            <input
                placeholder={"Введите эл.почту"}
                type='email'
                className={cls.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                value={email}
            />
            <input
                placeholder={"Введите пароль"}
                type='password'
                className={cls.input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                value={password}
            />
            <button className={cls.loginBtn} onClick={onLoginClick} disabled={formReady}>
                Войти
            </button>
        </div>
    );
};
