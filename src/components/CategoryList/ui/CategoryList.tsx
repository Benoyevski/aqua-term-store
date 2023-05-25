import { ICategory } from "../../../app/types/types";
import { classNames } from "../../../shared/classNames/classNames";
import cls from "./CategoryList.module.scss";

interface CategoryListProps {
    className?: string;
    item: ICategory;
}

export const CategoryList = ({ className, item }: CategoryListProps) => {
    return (
        <li className={classNames(cls.CategoryList, {}, [className])} key={item.title}>
            <div>
                <img src={`http://localhost:5000/${item.image}`} alt={item.title} />
                <div className={cls.productsTitle}>
                    <h3>{item.title}</h3>
                    <p></p>
                </div>
            </div>
        </li>
    );
};
