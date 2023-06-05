import { classNames } from "../../shared/classNames/classNames";
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
                    <h1>Популярные категории</h1>
                    <CategoryList popularity={true} />
                </section>
                <section className={cls.popularSection}>
                    <h1>Популярные товары</h1>
                    <ProductList popularity />
                </section>
            </div>
        </div>
    );
};
