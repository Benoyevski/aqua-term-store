import cls from "./Catalog.module.scss";
import { classNames } from "../../../shared/classNames/classNames";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchCategories } from "../../../features/categorySlice";
import { CategoryList } from "../../CategoryList";

interface CatalogProps {
    className?: string;
}

export const Catalog = ({ className }: CatalogProps) => {
    const dispatch = useAppDispatch();
    const categoryList = useAppSelector((state) => state.category.items);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className={cls.container}>
            <h1>Каталог</h1>
            <ul className={classNames(cls.Catalog, {}, [className])}>
                {categoryList.map((item) => {
                    return <CategoryList key={item._id} item={item} />;
                })}
            </ul>
        </div>
    );
};
