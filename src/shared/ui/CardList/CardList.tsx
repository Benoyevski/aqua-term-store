import { memo } from "react";
import cls from "./CardList.module.scss";
import { classNames } from "../../utils/classNames/classNames";
import { ItemsToCard } from "../../types/types";
import { ProductCard } from "../ProductCard/ProductCard";
import { TypeCard } from "../TypeCard/TypeCard";

interface CardListProps {
    className?: string;
    items: ItemsToCard[];
    onItemClick?: (item: string) => void;
}

export const CardList = memo(({ className, items, onItemClick }: CardListProps) => {

    return (
        <div className={classNames(cls.CardList, {}, [className])}>
            {items.map((item) => {
                if ("price" in item) {
                    return <ProductCard key={item._id} prod={item} />;
                } else if ("title" in item) {
                    return <TypeCard 
                        onItemClick={onItemClick} 
                        key={item._id} 
                        type={item} 
                        className={className}
                    />;
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
});
