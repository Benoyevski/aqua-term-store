import { classNames } from "../../utils/classNames/classNames";
import { useAppSelector } from "../../utils/hooks/hooks";
import cls from "./ProfilePrivate.module.scss";

interface ProfilePrivateProps {
    className?: string;
}

export const ProfilePrivate = ({ className }: ProfilePrivateProps) => {
    const user = useAppSelector((state) => state.user.user);

    return (
        <div className={classNames(cls.ProfilePrivate, {}, [className])}>
            <div className={cls.inputBlock}>
                <label htmlFor='login'>Логин</label>
                <input readOnly value={user?.login} id='login' type='text' />
            </div>
            <div className={cls.inputBlock}>
                <label htmlFor='email'>Электронная почта</label>
                <input readOnly value={user?.email} id='email' type='text' />
            </div>
        </div>
    );
};
