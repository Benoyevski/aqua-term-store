import cls from "./CatalogCard.module.scss";

import { classNames } from "../../../shared/classNames/classNames";
import { ICategory } from "../../../app/types/types";

interface CatalogCardProps {
    className?: string;
    item: ICategory;
}

export const CatalogCard = ({ className, item }: CatalogCardProps) => {
    return (
        <li className={classNames(cls.CatalogCard, {}, [className])} key={item.title}>
            <div>
                <img src={`http://localhost:5000/${item.image}`} alt={item.title} />
                <div className={cls.productsTitle}>
                    <h3>{item.title}</h3>
                    <p></p>
                </div>
            </div>
        </li>
    );
};
