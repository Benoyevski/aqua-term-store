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
