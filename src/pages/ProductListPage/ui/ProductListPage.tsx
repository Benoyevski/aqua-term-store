import { useEffect } from "react";
import { classNames } from "../../../shared/classNames/classNames";
import cls from "./ProductListPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchProducts } from "../../../features/productSlice";
import { fetchTypes } from "../../../features/typeSlice";
import { useParams } from "react-router-dom";
import { CardList } from "../../../shared/ui/CardList/CardList";

interface ProductListPageProps {
    className?: string;
}

export const ProductListPage = ({ className }: ProductListPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const allProducts = useAppSelector((state) => state.product.items);
    const allTypes = useAppSelector((state) => state.typeSlice.items);
    const types = allTypes.filter((type) => type.category === id);

    const products = allProducts.filter((prod) => prod.category === id);

    useEffect(() => {
        dispatch(fetchTypes());
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProductListPage, {}, [className])}>
            <div className={cls.productListWrapper}>
                <div className={cls.container}>
                    <CardList items={types} />

                    <div className={cls.productsBlock}>
                        <h1>Товары</h1>
                        <CardList items={products} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
