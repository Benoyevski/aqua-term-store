import { useLocation } from "react-router-dom";
import {
    clearProducts,
    removeProductFromBasket,
    selectBasket,
} from "../../../features/basketSlice";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./FixedBasket.module.scss";
import { exceptPaths } from "../../../shared/utils/const/common";
import React from "react";
import { BsCart3 } from "react-icons/bs";
import { PiShoppingCartLight } from "react-icons/pi";
import { BasketProduct } from "../../../shared/ui/BasketProduct/BasketProduct";

interface FixedBasketProps {
    className?: string;
}

export const FixedBasket = ({ className }: FixedBasketProps) => {
    const dispatch = useAppDispatch();

    const [showBasket, setShowBasket] = React.useState(false);
    const location = useLocation().pathname;
    const { products } = useAppSelector(selectBasket);

    const isMounted = React.useRef(false);

    React.useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(products);
            localStorage.setItem("basket", json);
        }
        isMounted.current = true;
    }, [products]);

    React.useEffect(() => {
        const closeBasket = () => setShowBasket(false);

        document.addEventListener("click", closeBasket);

        return () => {
            document.removeEventListener("click", closeBasket);
        };
    }, []);

    const unvisibleBasket = exceptPaths.includes(location);

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleRemoveFromBasket = (id: string) => {
        dispatch(removeProductFromBasket(id));
    };

    const handleClearBasket = () => {
        dispatch(clearProducts());
    };

    return (
        <div
            onClick={onContentClick}
            className={classNames(
                cls.FixedBasket,
                { [cls.hidden]: unvisibleBasket, [cls.showBasket]: showBasket },
                [className],
            )}
        >
            <div onClick={() => setShowBasket(!showBasket)} className={cls.show}>
                <span>
                    <p>{products.length}</p>
                </span>
                <BsCart3 />
            </div>

            <div className={cls.collapsedBasket}>
                <div className={cls.collapsedBasketHeader}>
                    <h2>Корзина</h2>
                    {products.length > 0 && (
                        <button onClick={handleClearBasket} className={cls.clearBasket}>
                            Очистить
                        </button>
                    )}
                </div>
                {products.length > 0 && (
                    <div
                        className={cls.productsCount}
                    >{`В корзине ${products.length} товаров`}</div>
                )}
                {products.length > 0 ? (
                    products.map((prod) => {
                        return (
                            <BasketProduct
                                inFixedBasket
                                key={prod.id}
                                handleRemoveFromBasket={handleRemoveFromBasket}
                                prod={prod}
                            />
                        );
                    })
                ) : (
                    <div className={cls.emptyBasket}>
                        <p>Ваша корзина пуста</p>
                        <span>
                            <PiShoppingCartLight />
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};
