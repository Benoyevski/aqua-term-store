import cls from "./ChangePassword.module.scss";

export const ChangePassword = () => {
    const passwordChangeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // const result = await dispatch();
        // if (result.meta.requestStatus === "fulfilled") {
        //     alert("Вы успешно зарегистрированы!!!");
        // }
    };

    return (
        <div className={cls.ChangePassword}>
            <form onSubmit={passwordChangeSubmit}></form>
            <div className={cls.newPassword}>
                <label htmlFor='newPassword'>Новый пароль</label>
                <input id='newPassword' type='text' />
            </div>
            <div className={cls.newPassword}>
                <label htmlFor='repeatPassword'>Введите новый пароль еще раз</label>
                <input id='repeatPassword' type='text' />
            </div>
            <button type='submit' className={cls.savePasswordBtn}>
                Сохранить изменения
            </button>
        </div>
    );
};
