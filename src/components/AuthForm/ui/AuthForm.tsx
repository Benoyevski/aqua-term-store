import { memo, useState } from "react";
import { classNames } from "../../../shared/utils/classNames/classNames";
import cls from "./AuthForm.module.scss";
import { LoginForm } from "../../LoginForm";
import { RegisterForm } from "../../RegisterForm";

interface AuthFormProps {
    className?: string;
    onSuccess: () => void;
}

export const AuthForm = memo(({ className, onSuccess }: AuthFormProps) => {
    const [authForm, setAuthForm] = useState(true);

    return (
        <div className={classNames(cls.AuthForm, {}, [className])}>
            {authForm ? (
                <LoginForm onSuccess={onSuccess} setAuthForm={setAuthForm} />
            ) : (
                <RegisterForm setAuthForm={setAuthForm} />
            )}
        </div>
    );
});
