import { memo } from "react";
import { useAppSelector } from "../../utils/hooks/hooks";
import cls from "./Form.module.scss";

interface FormProps {
    login?: string;
    setLogin?: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    label: string;
    btnLabel: string;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

export const Form = memo(({
    login,
    setLogin,
    email,
    setEmail,
    password,
    setPassword,
    label,
    btnLabel,
    onSubmit,
}: FormProps) => {
    const error = useAppSelector((state) => state.user.error);
    const isLoading = useAppSelector((state) => state.user.isLoading);

    return (
        <form onSubmit={onSubmit}>
            <h2>{label}</h2>

            {error && (
                <div className={cls.errorWrapper}>
                    <span className={cls.error}>{error.message}</span>
                </div>
            )}
            <div className={cls.formContainer}>
                {label === "Регистрация" && (
                    <div className={cls.inputWrapper}>
                        <label htmlFor='login'>Логин:</label>
                        <input
                            autoFocus
                            type='text'
                            id='login'
                            className={cls.input}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                setLogin?.(e.target.value)
                            }
                            value={login}
                        />
                    </div>
                )}
                <div className={cls.inputWrapper}>
                    <label htmlFor='email'>Эл.почта:</label>
                    <input
                        autoFocus={label !== "Регистрация"}
                        type='email'
                        id='email'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        value={email}
                    />
                </div>
                <div className={cls.inputWrapper}>
                    <label htmlFor='password'>Пароль:</label>

                    <input
                        type='password'
                        id='password'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                        value={password}
                    />
                </div>

                <button type='submit' className={cls.loginBtn}>
                    {isLoading ? <span className={cls.btnLoader} >loading....</span> : btnLabel}
                </button>
            </div>
        </form>
    );
});
