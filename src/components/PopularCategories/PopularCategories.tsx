import { classNames } from "../../shared/utils/classNames/classNames";
import { CategoryList } from "../CategoryList/ui/CategoryList";
import { ProductList } from "../ProductList";
import cls from "./PopularCategories.module.scss";

interface PopularCategoriesProps {
    className?: string;
}

export const PopularCategories = ({ className }: PopularCategoriesProps) => {
    return (
        <div className={classNames(cls.PopularCategories, {}, [className])}>
            <div className={cls.container}>
                <section className={cls.popularSection}>
                    <h3 className={cls.popularBlockTitle}>Популярные категории</h3>
                    <CategoryList popularity />
                </section>
                <section className={cls.popularSection}>
                    <h3 className={cls.popularBlockTitle}>Популярные товары</h3>
                    <ProductList popularity />
                </section>
            </div>
        </div>
    );
};
