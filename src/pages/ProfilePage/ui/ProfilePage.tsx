import cls from "./ProfilePage.module.scss";
import { Outlet, useParams } from "react-router-dom";
import { ProfileSidebar } from "../../../components/ProfileSidebar";
import { useEffect, useState } from "react";
import { ProfileMenu } from "../../../components/ProfileMenu";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { fetchUser } from "../../../features/userSlice";

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState("profile");
    const dispatch = useAppDispatch();

    const userId = useAppSelector((state) => state.user?.user?._id);

    useEffect(() => {
        if (userId) {
            dispatch(fetchUser(userId));
        }
    }, []);

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
