import cls from "./BasketPage.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import {
    clearProducts,
    removeProductFromBasket,
    selectBasket,
} from "../../../features/basketSlice";
import { BasketProduct } from "../../../shared/ui/BasketProduct/BasketProduct";

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
                                    <BasketProduct
                                        key={prod.id}
                                        handleRemoveFromBasket={handleRemoveFromBasket}
                                        prod={prod}
                                    />
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
