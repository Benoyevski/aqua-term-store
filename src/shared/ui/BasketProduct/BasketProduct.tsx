import { Link } from "react-router-dom";
import { TBasketProduct } from "../../../features/basketSlice";
import cls from "./BasketProduct.module.scss";
import { memo } from "react";
import { serverUrl } from "../../../serverUrl";
interface BasketProductProps {
    inFixedBasket?: boolean;
    prod: TBasketProduct;
    handleRemoveFromBasket: (id: string) => void;
}
export const BasketProduct = memo(
    ({ prod, handleRemoveFromBasket, inFixedBasket }: BasketProductProps) => {
        return (
            <div
                className={inFixedBasket ? cls.fixedBasketProductCard : cls.basketProductCard}
                key={prod.id}
            >
                <div className={cls.imgWrapper}>
                    <img src={`${serverUrl}${prod.imageSrc}`} alt={prod.title} />
                </div>
                <div className={cls.basketProdInfo}>
                    <Link
                        className={cls.basketProdTitle}
                        to={`/catalog/${prod.category}/${prod.id}`}
                    >
                        {prod.title}
                    </Link>
                </div>
                <button
                    onClick={() => handleRemoveFromBasket(prod.id)}
                    className={cls.removeFromBasketBtn}
                >
                    {inFixedBasket ? "Удалить" : "Убрать из корзины"}
                </button>
            </div>
        );
    },
);
