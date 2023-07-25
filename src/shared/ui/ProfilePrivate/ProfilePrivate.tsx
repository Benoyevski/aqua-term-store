import { useEffect } from "react";
import { classNames } from "../../utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import cls from "./ProfilePrivate.module.scss";

interface ProfilePrivateProps {
    className?: string;
}

export const ProfilePrivate = ({ className }: ProfilePrivateProps) => {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.user);

    return (
        <div className={classNames(cls.ProfilePrivate, {}, [className])}>
            <h1>ЛИЧНЫЕ ДАННЫЕ</h1>
            <img src={user?.avatar} alt='' />
            <h2>{user?.login}</h2>
            <p>{user?.email}</p>
        </div>
    );
};
