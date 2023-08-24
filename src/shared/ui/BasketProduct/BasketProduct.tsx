import { Link } from "react-router-dom";
import { TBasketProduct } from "../../../features/basketSlice";
import cls from "./BasketProduct.module.scss";
interface BasketProductProps {
    inFixedBasket?: boolean;
    prod: TBasketProduct;
    handleRemoveFromBasket: (id: string) => void;
}
export const BasketProduct = ({
    prod,
    handleRemoveFromBasket,
    inFixedBasket,
}: BasketProductProps) => {
    return (
        <div
            className={inFixedBasket ? cls.fixedBasketProductCard : cls.basketProductCard}
            key={prod.id}
        >
            <div className={cls.imgWrapper}>
                <img src={`http://localhost:5000/${prod.imageSrc}`} alt={prod.title} />
            </div>
            <div className={cls.basketProdInfo}>
                <Link className={cls.basketProdTitle} to={`/catalog/${prod.category}/${prod.id}`}>
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
};
