import { classNames } from "../../utils/classNames/classNames";
import cls from "./ProfilePrivate.module.scss";
interface ProfilePrivateProps {
    className?: string;
}
export const ProfilePrivate = ({ className }: ProfilePrivateProps) => {
    return <div className={classNames(cls.ProfilePrivate, {}, [className])}>ЛИЧНЫЕ ДАННЫЕ</div>;
};
