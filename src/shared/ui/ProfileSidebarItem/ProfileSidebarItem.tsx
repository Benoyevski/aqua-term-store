import { Link } from "react-router-dom";
import cls from "./ProfileSidebarItem.module.scss";
import { Dispatch } from "react";
import { IProfileTab } from "../../types/types";

interface ProfileSidebarItemProps {
    className?: string;
    item: IProfileTab;
    activeTab: string;
    setActiveTab: Dispatch<React.SetStateAction<string>>;
}

export const ProfileSidebarItem = ({
    className,
    item,
    activeTab,
    setActiveTab,
}: ProfileSidebarItemProps) => {
    return (
        <Link to={`/${item.path}`}>
            <li
                onClick={() => setActiveTab(item.path)}
                className={activeTab === item.path ? cls.activeItem : cls.sidebarItem}
            >
                {item.title}
            </li>
        </Link>
    );
};
