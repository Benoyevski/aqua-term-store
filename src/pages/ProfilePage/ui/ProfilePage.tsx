import React from 'react';
import { ProfileSidebar } from '../../../shared/ui/ProfileSidebar/ProfileSidebar';
import cls from './ProfilePage.module.scss'

const ProfilePage = () => {
    return (
        <div className={cls.profilePageWrapper}>
            <div className={cls.container}>
            <ProfileSidebar />
            {/* <Profile /> */}

            </div>
        </div>
    );
};

export default ProfilePage;