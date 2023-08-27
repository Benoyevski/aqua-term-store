import { Link } from "react-router-dom";
import cls from "./ProfileSidebarItem.module.scss";
import { IProfileTab } from "../../types/types";

interface ProfileSidebarItemProps {
    item: IProfileTab;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const ProfileSidebarItem = ({ item, activeTab, setActiveTab }: ProfileSidebarItemProps) => {
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
