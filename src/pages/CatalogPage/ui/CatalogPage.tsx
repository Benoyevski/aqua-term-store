import cls from "./CatalogPage.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchCategories } from "../../../features/categorySlice";
import { Loader } from "../../../shared/ui/Loader/Loader";
import { fetchTypes } from "../../../features/typeSlice";
import { CategoryCard } from "../../../shared/ui/CategoryCard/CategoryCard";

const CatalogPage = () => {
    const dispatch = useAppDispatch();
    const categoryList = useAppSelector((state) => state.category.items);
    const isLoading = useAppSelector((state) => state.category.isLoading);
    const typesList = useAppSelector((state) => state.typeSlice.items);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTypes());
    }, [dispatch]);

    return (
        <div className={cls.container}>
            <h1>Каталог</h1>

            {isLoading ? (
                <div className={cls.loader}>
                    <Loader />
                </div>
            ) : (
                <ul className={cls.Catalog}>
                    {categoryList.map((item) => {
                        return <CategoryCard key={item._id} category={item} typeList={typesList} />;
                    })}
                </ul>
            )}
        </div>
    );
};

export default CatalogPage;
