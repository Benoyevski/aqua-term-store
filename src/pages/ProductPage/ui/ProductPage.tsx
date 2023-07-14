import cls from "./ProductPage.module.scss";
import { useEffect } from "react";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { fetchProducts } from "../../../features/productSlice";
import { useParams } from "react-router-dom";

interface ProductPageProps {
    className?: string;
}

const ProductPage = ({ className }: ProductPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const product = useAppSelector((state) => state.product.items).find((prod) => prod._id === id);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProductPage, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.productPageContent}>
                    <div className={cls.prodImage}>
                        <img src={`http://localhost:5000/${product?.image}`} alt='productImage' />
                        <div className={cls.prodMainInfo}>
                            <div className={cls.fabricator}>{product?.fabricator}</div>
                            <h3 className={cls.prodPrice}>{product?.price} руб./шт</h3>
                        </div>
                    </div>
                    <div className={cls.info}>
                        <h4>Описание</h4>
                        <p>{product?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
