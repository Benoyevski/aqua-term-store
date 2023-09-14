import { memo } from "react";
import { IType } from "../../types/types";
import { classNames } from "../../utils/classNames/classNames";
import cls from "./TypeCard.module.scss";
import { serverUrl } from "../../../serverUrl";

interface TypeCardProps {
    className?: string;
    type: IType;
    onItemClick: ((item: string) => void) | undefined;
}

export const TypeCard = memo(({ className, type, onItemClick }: TypeCardProps) => {

    const handleItemClick = (item: string) => {
        if (onItemClick) {
            onItemClick(item);
        }
    };

    return (
        <div onClick={() => handleItemClick(type._id)} 
            className={classNames(cls.TypeCard, {[cls.selected]: className === type._id}, [className])}>
            <div>
                <img src={`${serverUrl}${type.image}`} alt={type.title} />
            </div>
            <p>{type.title}</p>
        </div>
    );
});
