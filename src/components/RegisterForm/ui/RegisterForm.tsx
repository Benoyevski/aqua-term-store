import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./RegisterForm.module.scss";
import { register } from "../../../features/userSlice";
import { Form } from "../../../shared/ui/Form/Form";

interface RegisterFormProps {
    setAuthForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterForm = ({ setAuthForm }: RegisterFormProps) => {
    const dispatch = useAppDispatch();

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const err = useAppSelector((state) => state.user.error);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const result = await dispatch(register({ login, email, password }));
        if (result.meta.requestStatus === "fulfilled") {
            alert("Вы успешно зарегистрированы!!!");
        }
    };

    return (
        <>
            <Form
                login={login}
                setLogin={setLogin}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
                label='Регистрация'
                btnLabel='Зарегистрироваться'
                onSubmit={onSubmit}
            />
            <div className={cls.haveAcc}>
                Уже есть аккаунт?
                <p onClick={() => setAuthForm(true)} className={cls.haveAccLink}>
                    Войти
                </p>
            </div>
            <p>{err && err.message}</p>
        </>
    );
};
