import { memo, useState } from "react";
import { useAppDispatch } from "../../../shared/utils/hooks/hooks";
import cls from "./RegisterForm.module.scss";
import { clearError, register } from "../../../features/userSlice";
import { Form } from "../../../shared/ui/Form/Form";

interface RegisterFormProps {
    setAuthForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterForm =memo( ({ setAuthForm }: RegisterFormProps) => {
    const dispatch = useAppDispatch();

    const [login, setLogin] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!password || password.length < 6) {
            return alert("Пароль должен содержать не меньше 6 символов");
        }

        const result = await dispatch(register({ login, email, password }));
        if (result.meta.requestStatus === "fulfilled") {
            alert("Вы успешно зарегистрированы!!!");
            setAuthForm(true)
        }
    };
    

    const toggleForm = () => {
        dispatch(clearError());
        setAuthForm(true);
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
                <p onClick={toggleForm} className={cls.haveAccLink}>
                    Войти
                </p>
            </div>
        </>
    );
});
