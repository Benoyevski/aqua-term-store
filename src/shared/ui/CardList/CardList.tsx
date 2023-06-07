import { FC } from "react";
import cls from "./CardList.module.scss";
import { classNames } from "../../classNames/classNames";
import { ItemsToCard } from "../../../app/types/types";
import { ProductCard } from "../ProductCard/ProductCard";
import { TypeCard } from "../TypeCard/TypeCard";

interface CardListProps {
    className?: string;
    items: ItemsToCard[];
}

export const CardList: FC<CardListProps> = ({ className, items }) => {
    return (
        <div className={classNames(cls.CardList, {}, [className])}>
            {items.map((item) => {
                if ("price" in item) {
                    return <ProductCard key={item._id} prod={item} />;
                } else if ("title" in item) {
                    return <TypeCard key={item._id} type={item} />;
                } else {
                    return (
                        <div>
                            Данные отсутствуют либо произошла ошибка при запросе на сервер :({" "}
                        </div>
                    );
                }
            })}
        </div>
    );
};
