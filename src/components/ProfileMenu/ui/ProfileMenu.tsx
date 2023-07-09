import { ProfileMenuCard } from "../../../shared/ui/ProfileMenuCard/ProfileMenuCard";
import { profileTabs } from "../../../shared/utils/const/common";
import cls from "./ProfileMenu.module.scss";

interface ProfileMenuProps {

    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const ProfileMenu = ({  activeTab, setActiveTab }: ProfileMenuProps) => {
    return (
        <section className={cls.ProfileMenu}>
            {profileTabs.slice(1).map((item) => {
                return (
                    <ProfileMenuCard
                        key={item.title}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                        item={item}
                    />
                );
            })}
        </section>
    );
};
