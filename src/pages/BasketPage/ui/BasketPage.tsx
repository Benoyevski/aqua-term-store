import cls from "./BasketPage.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import {
    clearProducts,
    removeProductFromBasket,
    selectBasket,
} from "../../../features/basketSlice";

const BasketPage = () => {
    const dispatch = useAppDispatch();
    const { products } = useAppSelector(selectBasket);

    const handleRemoveFromBasket = (id: string) => {
        dispatch(removeProductFromBasket(id));
    };

    const handleClearBasket = () => {
        dispatch(clearProducts());
    };

    return (
        <div className={classNames(cls.BasketPage, {}, [])}>
            <div className={cls.container}>
                <div className={cls.basketWrapper}>
                    {products.length < 1 ? (
                        <div>Пусто</div>
                    ) : (
                        <>
                            <div className={cls.basketHeader}>
                                <p>{`В корзине ${products.length} товаров`}</p>
                                <button onClick={handleClearBasket} className={cls.clearBasket}>
                                    Очистить
                                </button>
                            </div>
                            {products.map((prod) => {
                                return (
                                    <div className={cls.basketProductCard} key={prod.id}>
                                        <div className={cls.imgWrapper}>
                                            <img
                                                src={`http://localhost:5000/${prod.imageSrc}`}
                                                alt={prod.title}
                                            />
                                        </div>
                                        <div className={cls.basketProdInfo}>
                                            <p>{prod.title}</p>
                                        </div>
                                        <button
                                            onClick={() => handleRemoveFromBasket(prod.id)}
                                            className={cls.removeFromBasketBtn}
                                        >
                                            Убрать из корзины
                                        </button>
                                    </div>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BasketPage;
