import cls from "./ProfileSidebar.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { profileTabs } from "../../../shared/utils/const/common";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProfileSidebarItem } from "../../../shared/ui/ProfileSidebarItem/ProfileSidebarItem";

interface ProfileSidebarProps {
    className?: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const ProfileSidebar = ({ className, activeTab, setActiveTab }: ProfileSidebarProps) => {
    // const { pathname } = useLocation();
    // const tab = pathname.slice(1); // Извлечь часть пути без первого слэша

    // useEffect(() => {
    //     // Обновить activeTab при изменении маршрута
    //     setActiveTab(tab);
    //     console.log(tab);
    // }, [setActiveTab]);
    

    return (
        <ul className={classNames(cls.ProfileSidebar, {}, [className])}>
            {profileTabs.map((item) => {
                return (
                    <ProfileSidebarItem
                        key={item.title}
                        item={item}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                );
            })}
            <li className={cls.logout}>Выйти</li>
        </ul>
    );
};
