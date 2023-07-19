import { FC } from "react";
import cls from "./FabricatorCard.module.scss";
import { classNames } from "../../utils/classNames/classNames";
import { IFabricator } from "../../types/types";

interface FabricatorCardProps {
    className?: string;
    fabricator: IFabricator;
}

export const FabricatorCard = ({ className, fabricator }: FabricatorCardProps) => {
    return (
        <div className={classNames(cls.FabricatorCard, {}, [className])}>
            <div className={cls.fabricatorsImgWrapper}>
                <img
                    className={cls.fabricatorImg}
                    src={`http://localhost:5000/${fabricator.image}`}
                    alt='productImage'
                />
            </div>
        </div>
    );
};
