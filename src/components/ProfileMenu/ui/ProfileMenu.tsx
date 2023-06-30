import { ProfileMenuCard } from "../../../shared/ui/ProfileMenuCard/ProfileMenuCard";
import { ProfileSidebarItem } from "../../../shared/ui/ProfileSidebarItem/ProfileSidebarItem";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { profileTabs } from "../../../shared/utils/const/common";
import cls from "./ProfileMenu.module.scss";

interface ProfileMenuProps {
    className?: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const ProfileMenu = ({ className, activeTab, setActiveTab }: ProfileMenuProps) => {
    return (
        <section className={classNames(cls.ProfileMenu, {}, [className])}>
            {/* <ProfileMenuCard link='private' image='icons/profile/pers.png' title='Личные данные' />
            <ProfileMenuCard link='wallet' image='icons/profile/wallet.png' title='Кошелек' />
            <ProfileMenuCard link='changePassword' image='icons/profile/pass.png' title='Сменить пароль' />
            <ProfileMenuCard link='/basket' image='icons/profile/basket.png' title='Корзина' />
            <ProfileMenuCard link='/contacts' image='icons/profile/contacts.png' title='Контакты' /> */}

            {profileTabs.slice(1).map((item) => {
                return (
                    <ProfileMenuCard
                        key={item.title}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        item={item}
                    />
                );
            })}
        </section>
    );
};
