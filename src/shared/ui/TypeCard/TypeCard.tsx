import { memo } from "react";
import { IType } from "../../types/types";
import { classNames } from "../../utils/classNames/classNames";
import cls from "./TypeCard.module.scss";

interface TypeCardProps {
    className?: string;
    type: IType;
}

export const TypeCard = memo(({ className, type }: TypeCardProps) => {
    return (
        <div className={classNames(cls.TypeCard, {}, [className])}>
            <div>
                <img src={`http://localhost:5000/${type.image}`} alt={type.title} />
            </div>
            <p>{type.title}</p>
        </div>
    );
});
