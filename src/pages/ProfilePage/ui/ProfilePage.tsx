import cls from "./ProfilePage.module.scss";
import { Outlet } from "react-router-dom";
import { ProfileSidebar } from "../../../components/ProfileSidebar";
import { useState } from "react";
import { ProfileMenu } from "../../../components/ProfileMenu";
import { useAppSelector } from "../../../shared/utils/hooks/hooks";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("profile");

    

    return (
        <div className={cls.profilePageWrapper}>
            <div className={cls.container}>
                <div className={cls.profilePage}>
                    <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                    {activeTab === "profile" ? (
                        <ProfileMenu activeTab={activeTab} setActiveTab={setActiveTab} />
                    ) : (
                        <Outlet />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
