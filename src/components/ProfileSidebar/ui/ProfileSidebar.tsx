import cls from "./ProfileSidebar.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { profileTabs } from "../../../shared/utils/const/common";
import { useLocation, useNavigate } from "react-router-dom";
import { ProfileSidebarItem } from "../../../shared/ui/ProfileSidebarItem/ProfileSidebarItem";
import { memo, useEffect } from "react";
import { useAppDispatch } from "../../../shared/utils/hooks/hooks";
import { logoutUser } from "../../../features/userSlice";

interface ProfileSidebarProps {
    className?: string;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const ProfileSidebar = memo(
    ({ className, activeTab, setActiveTab }: ProfileSidebarProps) => {
        const dispatch = useAppDispatch();
        const navigate = useNavigate();
        const handleLogout = () => {
            localStorage.clear();
            navigate("/", { replace: true });
            dispatch(logoutUser());
        };

        const loc = useLocation();

        useEffect(() => {
            if (loc.pathname === "/profile") {
                setActiveTab("profile");
            }
        }, [loc.pathname, setActiveTab]);

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
                <li onClick={handleLogout} className={cls.logout}>
                    Выйти
                </li>
            </ul>
        );
    },
);
