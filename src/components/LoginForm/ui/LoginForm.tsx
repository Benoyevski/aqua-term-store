import { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./LoginForm.module.scss";
import { authorization } from "../../../features/userSlice";
import { Form } from "../../../shared/ui/Form/Form";
import { useNavigate } from "react-router-dom";

interface LoginFormProps {
    setAuthForm: React.Dispatch<React.SetStateAction<boolean>>;
    onSuccess: () => void;
}

export const LoginForm = ({ setAuthForm, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();

            const result = await dispatch(authorization({ email, password }));
            if (result.meta.requestStatus === "fulfilled") {
                onSuccess();
                navigate("/");
            }
        },
        [onSuccess, dispatch, email, password],
    );

    return (
        <>
            <Form
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
                label='Авторизация'
                btnLabel='Войти'
                onSubmit={onSubmit}
            />
            <div className={cls.haveAcc}>
                Еще нет аккаунта?
                <p onClick={() => setAuthForm(false)} className={cls.haveAccLink}>
                    Зарегистрироваться
                </p>
            </div>
        </>
    );
};
