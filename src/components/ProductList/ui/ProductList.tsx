import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { classNames } from "../../../shared/classNames/classNames";
import cls from "./ProductList.module.scss";
import { fetchProducts } from "../../../features/productSlice";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { ProductCard } from "../../../shared/ui/ProductCard/ProductCard";

interface ProductListProps {
    className?: string;
    popularity?: boolean;
}

export const ProductList = ({ className, popularity }: ProductListProps) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.items);
    const isLoading = useAppSelector((state) => state.product.isLoading);

    useEffect(() => {
        // Проверяем, есть ли данные о категориях и типах в хранилище Redux
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products]);

    const sortedProducts = popularity
        ? [...products].sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
        : products;

    return (
        <ul className={classNames(cls.ProductList, {}, [className])}>
            {isLoading ? (
                <div className={cls.loader}>
                    <Loader />
                </div>
            ) : (
                sortedProducts.map((product) => {
                    return <ProductCard prod={product} />;
                })
            )}
        </ul>
    );
};
