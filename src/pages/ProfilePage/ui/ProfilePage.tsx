import cls from "./ProfilePage.module.scss";
import { Outlet } from "react-router-dom";
import { ProfileSidebar } from "../../../components/ProfileSidebar";
import { useEffect, useState } from "react";
import { ProfileMenu } from "../../../components/ProfileMenu";

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
