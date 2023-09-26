import { useEffect, useState } from "react";
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

    const [selectedType, setSelectedType] = useState<string>('')

    const filteredProducts = products.filter(prod => selectedType === '' || prod.type === selectedType)
    
    useEffect(() => {
        dispatch(fetchTypes());
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleTypeClick = (type: string) => {
        setSelectedType(type);
    };

    return (
        <div className={classNames(cls.ProductListPage, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.productListWrapper}>
                    <CardList className={selectedType} items={types} onItemClick={handleTypeClick} />
                    <button className={cls.clearFilters} onClick={() => setSelectedType('')}>Сбросить фильтры</button>
                    <div className={cls.productsBlock}>
                        <h2>
                            {!selectedType ?
                                "Все товары" : <span>{types.find(type => type._id === selectedType)?.title}</span>}
                        </h2>
                        <div>
                            
                        </div>
                        {filteredProducts.length > 0 ? <CardList items={filteredProducts}/> : (
                            <div className={cls.noProducts}><p>
                                Нет подходящих товаров
                            </p></div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListPage;
 