import { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { classNames } from "../../../shared/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { authorization, register } from "../../../features/userSlice";

interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

export const LoginForm = ({ className, onSuccess }: LoginFormProps) => {
    const dispatch = useAppDispatch();

    const [loginForm, setLoginForm] = useState(true);

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const regFormReady = !login || !password || !email;
    const authFormReady = !password || !email;

    const onLoginClick = () => {
        dispatch(register({ login, email, password }));
    };

    const handleAuth = useCallback(async () => {
        const result = await dispatch(authorization({ email, password }));
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess();
        }
    }, [onSuccess, dispatch, email, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {loginForm ? (
                <>
                    <h2>Авторизация</h2>

                    <input
                        placeholder={"Введите эл.почту"}
                        type='email'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        value={email}
                    />
                    <input
                        placeholder={"Введите пароль"}
                        type='password'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                        value={password}
                    />
                    <button className={cls.loginBtn} onClick={handleAuth} disabled={authFormReady}>
                        Войти
                    </button>
                    <p className={cls.haveAcc}>
                        Еще нет аккаунта?
                        <p onClick={() => setLoginForm(false)} className={cls.haveAccLink}>
                            Зарегистрироваться
                        </p>
                    </p>
                </>
            ) : (
                <>
                    <h2>Регистрация</h2>
                    <input
                        autoFocus
                        placeholder={"Введите логин"}
                        type='text'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setLogin(e.target.value)
                        }
                        value={login}
                    />
                    <input
                        placeholder={"Введите эл.почту"}
                        type='email'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        value={email}
                    />
                    <input
                        placeholder={"Введите пароль"}
                        type='password'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                        value={password}
                    />
                    <button className={cls.loginBtn} onClick={onLoginClick} disabled={regFormReady}>
                        Зарегистрироваться
                    </button>
                    <p className={cls.haveAcc}>
                        Уже есть аккаунт?
                        <p onClick={() => setLoginForm(true)} className={cls.haveAccLink}>
                            Войти
                        </p>
                    </p>
                </>
            )}

            {/* <h2>Регистрация</h2>
            <div>
                <div>
                    <input
                        autoFocus
                        type='text'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setLogin(e.target.value)
                        }
                        value={login}
                    />
                    <label htmlFor='input'>Логин</label>
                </div>
                <div>
                    <input
                        type='email'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        value={email}
                    />
                    <label htmlFor='input'>Эл.почта</label>
                </div>
                <div>
                    <input
                        type='password'
                        className={cls.input}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                        value={password}
                    />
                    <label htmlFor='input'>Пароль</label>
                </div>
                <button className={cls.loginBtn} onClick={onLoginClick} disabled={formReady}>
                    Зарегистрироваться
                </button>
                <div>
                    <p>Уже есть аккаунт?</p>
                    <p>Войти</p>
                </div>
            </div> */}
        </div>
    );
};
