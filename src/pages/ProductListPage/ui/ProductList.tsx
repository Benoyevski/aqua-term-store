import { useEffect } from "react";
import { classNames } from "../../../shared/classNames/classNames";
import cls from "./ProductList.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchProducts } from "../../../features/productSlice";
import { fetchTypes } from "../../../features/typeSlice";
import { useParams } from "react-router-dom";

interface ProductListProps {
    className?: string;
}

export const ProductList = ({ className }: ProductListProps) => {
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
        <div className={cls.container}>
            <div className={classNames(cls.ProductList, {}, [className])}>
                <div className={cls.typeList}>
                    {types.map((type) => {
                        return (
                            <div className={cls.typeCard} key={type._id}>
                                <div>
                                    <img
                                        src={`http://localhost:5000/${type.image}`}
                                        alt={type.title}
                                    />
                                </div>
                                <p>{type.title}</p>
                            </div>
                        );
                    })}
                </div>

                <div className={cls.productsBlock}>
                    <h1>Товары</h1>
                    <div className={cls.productList}>
                        {products.map((prod) => {
                            return (
                                <div className={cls.productCard} key={prod._id}>
                                    <div>
                                        <img
                                            src={`http://localhost:5000/${prod.image}`}
                                            alt={prod.name}
                                        />
                                    </div>
                                    <p className={cls.prodTitle}>{prod.name}</p>
                                    <p className={cls.prodPrice}>{prod.price}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
