import cls from "./ProfileSidebar.module.scss";
import { classNames } from "../../utils/classNames/classNames";
import { profileTabs } from "../../utils/const/common";
import { Link } from "react-router-dom";
import { useState } from "react";

interface ProfileSidebarProps {
    className?: string;
}

export const ProfileSidebar = ({ className }: ProfileSidebarProps) => {
    const [activeTab, setActiveTab] = useState("profile");

    return (
        <ul className={classNames(cls.ProfileSidebar, {}, [className])}>
            {profileTabs.map((item) => {
                return (
                    <Link to={`/${item.path}`}>
                        <li className={activeTab === item.path ? cls.activeItem : cls.sidebarItem}>{item.title}</li>
                    </Link>
                );
            })}
            <li className={cls.logout}>Выйти</li>
        </ul>
    );
};
