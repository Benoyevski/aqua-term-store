import { memo, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { classNames } from "../../../shared/utils/classNames/classNames";
import cls from "./ProductList.module.scss";
import { fetchProducts } from "../../../features/productSlice";
import { ProductCard } from "../../../shared/ui/ProductCard/ProductCard";
import SkeletonProduct from "../../../shared/ui/Skeletons/SkeletonProduct";

interface ProductListProps {
    className?: string;
    popularity?: boolean;
}

export const ProductList = memo(({ className, popularity }: ProductListProps) => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.product.items);
    const isLoading = useAppSelector((state) => state.product.isLoading);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products]);

    const sortedProducts = popularity
        ? [...products].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 20)
        : products;

    return (
        <ul className={classNames(cls.ProductList, {}, [className])}>
            {isLoading
                ? [...new Array(12)].map((_, index) => (
                      <div key={index} className={cls.skeletonList}>
                          <SkeletonProduct />
                      </div>
                  ))
                : sortedProducts.map((product) => {
                      return <ProductCard key={product._id} prod={product} popularity />;
                  })}
        </ul>
    );
});
