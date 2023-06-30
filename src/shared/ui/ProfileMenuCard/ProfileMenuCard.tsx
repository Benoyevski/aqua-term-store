import { Link } from "react-router-dom";
import cls from "./ProfileMenuCard.module.scss";
import { IProfileTab } from "../../types/types";

interface ProfileMenuCardProps {
    item: IProfileTab;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export const ProfileMenuCard = ({ item, activeTab, setActiveTab }: ProfileMenuCardProps) => {
    return (
        <Link
            to={`/${item.path}`}
            onClick={() => setActiveTab(item.path)}
            className={cls.cardWrapper}
        >
            <img className={cls.profileCardImage} src={item.image} alt={item.path} />
            <p className={cls.profileCardTitle}>{item.title}</p>
        </Link>
    );
};
