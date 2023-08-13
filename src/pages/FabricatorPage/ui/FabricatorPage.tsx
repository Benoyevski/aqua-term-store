import cls from "./FabricatorPage.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchFabricators } from "../../../features/fabricatorSlice";
import { fetchProducts } from "../../../features/productSlice";
import { ProductCard } from "../../../shared/ui/ProductCard/ProductCard";
interface FabricatorPageProps {
    className?: string;
}
const FabricatorPage = ({ className }: FabricatorPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const isProductsLoading = useAppSelector((state) => state.product.isLoading);
    const isFabricatorsLoading = useAppSelector((state) => state.fabricator.isLoading);
    const fabricator = useAppSelector((state) => state.fabricator.items).find(
        (fabr) => fabr._id === id,
    );
    const products = useAppSelector((state) => state.product.items);
    const fabricatorProds = products.filter((prod) => prod.fabricator === id);

    useEffect(() => {
        dispatch(fetchFabricators());
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.FabricatorPage, {}, [className])}>
            <div className={cls.container}>
                {isFabricatorsLoading ? (
                    <p>Загружаю...</p>
                ) : (
                    <main className={cls.fabricatorContent}>
                        <section className={cls.fabricatorInfo}>
                            <div className={cls.imageWrapper}>
                                <img
                                    className={cls.fabricatorImg}
                                    src={`http://localhost:5000/${fabricator?.image}`}
                                    alt='productImage'
                                />
                            </div>
                            <p className={cls.fabricatorDescription}>{fabricator?.description}</p>
                        </section>
                        <section className={cls.fabricatorProds}>
                            <h3>{`Товары ${fabricator?.title} в нашем магизине`} </h3>

                            {isProductsLoading ? (
                                <p>идет загрузка...</p>
                            ) : (
                                <div className={cls.prodList}>
                                    {fabricatorProds.length > 1 ? (
                                        fabricatorProds.map((prod) => (
                                            <ProductCard key={prod._id} prod={prod} />
                                        ))
                                    ) : (
                                        <p>Нет товаров этого производителя</p>
                                    )}
                                </div>
                            )}
                        </section>
                    </main>
                )}
            </div>
        </div>
    );
};

export default FabricatorPage;
