import React from "react";
import cls from "./ProfilePage.module.scss";
import { Outlet } from "react-router-dom";
import { ProfileSidebar } from "../../../components/ProfileSidebar";

const ProfilePage = () => {
    return (
        <div className={cls.profilePageWrapper}>
            <div className={cls.container}>
                <div className={cls.profilePage}>
                    <ProfileSidebar />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
