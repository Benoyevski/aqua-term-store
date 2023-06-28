import cls from "./ProfileSidebar.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { profileTabs } from "../../../shared/utils/const/common";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ProfileSidebarItem } from "../../../shared/ui/ProfileSidebarItem/ProfileSidebarItem";

interface ProfileSidebarProps {
    className?: string;
}

export const ProfileSidebar = ({ className }: ProfileSidebarProps) => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <ul className={classNames(cls.ProfileSidebar, {}, [className])}>
            {profileTabs.map((item) => {
                return (
                    <ProfileSidebarItem
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
