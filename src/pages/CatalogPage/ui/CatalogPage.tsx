import cls from "./Category.module.scss";
import { CatalogCard } from "../../../components/CatalogCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchCategories } from "../../../features/CategorySlice";

const CatalogPage = () => {
    const dispatch = useAppDispatch();
    const categoryList = useAppSelector((state) => state.category.items);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);
    return (
        <div className={cls.container}>
            <h1>КАТАЛОГ</h1>
            <ul className={cls.categoryList}>
                {categoryList.map((item) => {
                    return <CatalogCard item={item} />;
                })}
            </ul>
        </div>
    );
};

export default CatalogPage;
