import { Link } from "react-router-dom";
import { ICategory, IType } from "../../../app/types/types";
import { classNames } from "../../classNames/classNames";
import cls from "./CategoryCard.module.scss";

interface CategoryCardProps {
    className?: string;
    category: ICategory;
    typeList: IType[];
}

export const CategoryCard = ({ className, category, typeList }: CategoryCardProps) => {
    const types = typeList.filter((type) => type.category === category._id);

    return (
        <li className={classNames(cls.CategoryList, {}, [className])} key={category.title}>
            <div className={cls.imgWrapper}>
                <img src={`http://localhost:5000/${category.image}`} alt={category.title} />
            </div>
            <div className={cls.productsTitle}>
                <h3>
                    <Link to={"/products/" + category._id}>{category.title}</Link>
                </h3>
                <ul className={cls.typesList}>
                    {types.map((el) => {
                        return (
                            <li className={cls.typeTitle} key={el._id}>
                                {el.title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </li>
    );
};
