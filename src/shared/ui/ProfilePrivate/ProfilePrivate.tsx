import { useEffect } from "react";
import { classNames } from "../../utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/hooks";
import cls from "./ProfilePrivate.module.scss";
import { fetchUser } from "../../../features/userSlice";

interface ProfilePrivateProps {
    className?: string;
}

export const ProfilePrivate = ({ className }: ProfilePrivateProps) => {
    const dispatch = useAppDispatch();
    const currentUser = useAppSelector((state) => state.user.user);
    console.log(currentUser);

    const id = localStorage.getItem("id");

    useEffect(() => {
        dispatch(fetchUser(id));
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProfilePrivate, {}, [className])}>
            <h1>ЛИЧНЫЕ ДАННЫЕ</h1>
            <h2>{currentUser?.login}</h2>
        </div>
    );
};
