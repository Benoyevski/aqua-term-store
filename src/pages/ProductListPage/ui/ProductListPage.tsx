import { useEffect } from "react";
import { classNames } from "../../../shared/utils/classNames/classNames";
import cls from "./ProductListPage.module.scss";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { fetchTypes } from "../../../features/typeSlice";
import { useParams } from "react-router-dom";
import { CardList } from "../../../shared/ui/CardList/CardList";
import { fetchProducts } from "../../../features/productSlice";

interface ProductListPageProps {
    className?: string;
}

export const ProductListPage = ({ className }: ProductListPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const allTypes = useAppSelector((state) => state.typeSlice.items);
    const types = allTypes.filter((type) => type.category === id);
    const allProducts = useAppSelector((state) => state.product.items);
    const products = allProducts.filter((prod) => prod.category === id);

    useEffect(() => {
        dispatch(fetchTypes());
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProductListPage, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.productListWrapper}>
                    <CardList items={types} />

                    <div className={cls.productsBlock}>
                        <h2>Товары</h2>
                        <CardList items={products} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
 