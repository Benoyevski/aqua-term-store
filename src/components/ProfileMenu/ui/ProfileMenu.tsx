import { ProfileMenuCard } from "../../../shared/ui/ProfileMenuCard/ProfileMenuCard";
import { classNames } from "../../../shared/utils/classNames/classNames";
import cls from "./ProfileMenu.module.scss";

interface ProfileMenuProps {
    className?: string;
}

export const ProfileMenu = ({ className }: ProfileMenuProps) => {
    return (
        <section className={classNames(cls.ProfileMenu, {}, [className])}>
            <ProfileMenuCard image='icons/profile/' title='Личные данные' />
            <ProfileMenuCard image='icons/profile/' title='Корзина' />
            <ProfileMenuCard image='icons/profile/' title='Сменить пароль' />
            <ProfileMenuCard image='icons/profile/' title='Контакты' />
        </section>
    );
};
