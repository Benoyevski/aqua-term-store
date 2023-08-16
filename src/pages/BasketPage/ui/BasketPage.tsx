import React from "react";
import cls from "./BasketPage.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppSelector } from "../../../shared/utils/hooks/hooks";
import { selectBasket } from "../../../features/basketSlice";

const BasketPage = () => {
    const { products } = useAppSelector(selectBasket);


    return (
        <div className={classNames(cls.BasketPage, {}, [])}>
            <div className={cls.container}>
                <div className={cls.basketWrapper}>
                    {products.map((prod) => {
                        return (
                            <div key={prod.id}>
                                <p>{prod.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BasketPage;
