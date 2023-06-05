import { Link } from "react-router-dom";
import { ICategory, IType } from "../../../app/types/types";
import { classNames } from "../../classNames/classNames";
import cls from "./CategoryCard.module.scss";
import { useAppDispatch } from "../../../app/utils/hooks";
import { incrementCategoryPopularity } from "../../../features/categorySlice";

interface CategoryCardProps {
    className?: string;
    category: ICategory;
    typeList: IType[];
    popularBlock?: boolean;
}

export const CategoryCard = ({
    className,
    category,
    typeList,
    popularBlock,
}: CategoryCardProps) => {
    const types = typeList.filter((type) => type.category === category._id);
    const dispatch = useAppDispatch();

    const handleIncrementPopularity = () => {
        dispatch(incrementCategoryPopularity(category._id));
    };

    return (
        <li
            className={classNames(cls.CategoryList, { [cls.popularCard]: popularBlock }, [
                className,
            ])}
            key={category.title}
        >
            <div className={cls.imgWrapper}>
                <img
                    src={`http://localhost:5000/${category.image}`}
                    alt={category.title}
                    key={category._id}
                />
            </div>
            <div className={cls.productsTitle}>
                <h3 className={cls.title} onClick={handleIncrementPopularity}>
                    <Link to={`/products/${category._id}`}> {category.title}</Link>
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
