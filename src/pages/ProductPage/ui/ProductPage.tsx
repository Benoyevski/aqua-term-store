import cls from "./ProductPage.module.scss";
import { useEffect } from "react";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { fetchProducts } from "../../../features/productSlice";
import { useParams } from "react-router-dom";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { Rating } from "../../../shared/ui/Rating/Rating";
import { PriceInfo } from "../../../shared/ui/PriceInfo/PriceInfo";

interface ProductPageProps {
    className?: string;
}

const ProductPage = ({ className }: ProductPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const product = useAppSelector((state) => state.product.items).find((prod) => prod._id === id);
    const isLoading = useAppSelector((state) => state.product.isLoading);
    const fabricator = useAppSelector((state) => state.fabricator.items).find(
        (item) => item._id === product?.fabricator,
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.ProductPage, {}, [className])}>
            <div className={cls.container}>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div className={cls.productPageContent}>
                        <div className={cls.prodImage}>
                            <div className={cls.prodImageWrapper}>
                                <img
                                    src={`http://localhost:5000/${product?.image}`}
                                    alt='productImage'
                                />
                            </div>
                            <div className={cls.prodMainInfo}>
                                <div className={cls.fabricator}>
                                    <div className={cls.rating}>
                                        <Rating />
                                    </div>
                                    <span className={cls.fabricatorImageWrapper}>
                                        <img
                                            className={cls.fabricatorImage}
                                            src={`http://localhost:5000/${fabricator?.image}`}
                                            alt=''
                                        />
                                    </span>
                                </div>
                                <div className={cls.productInfo}>
                                    <div className={cls.productToBasket}>
                                        <button>В корзину</button>
                                    </div>
                                    <div className={cls.productFabricator}>
                                        <p>Производитель</p>
                                        <p>{fabricator?.title}</p>
                                    </div>
                                </div>
                                <PriceInfo />
                            </div>
                        </div>
                        <div className={cls.info}>
                            <h2>Описание</h2>
                            <p>{product?.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductPage;
