import cls from "./ProfileMenuCard.module.scss";

interface ProfileMenuCardProps {
    image: string;
    title: string;
}

export const ProfileMenuCard = ({ image, title }: ProfileMenuCardProps) => {
    return (
        <div className={cls.cardWrapper}>
            <img className={cls.profileCardImage} src={image} alt={title} />
            <p className={cls.profileCardTitle}>{title}</p>
        </div>
    );
};
