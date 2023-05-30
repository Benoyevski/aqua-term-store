import { useEffect } from "react";
import { ICategory } from "../../../app/types/types";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchTypes } from "../../../features/typeSlice";
import { classNames } from "../../../shared/classNames/classNames";
import cls from "./CategoryList.module.scss";
import { Link, useNavigate } from "react-router-dom";

interface CategoryListProps {
    className?: string;
    item: ICategory;
}

export const CategoryList = ({ className, item }: CategoryListProps) => {
    const dispatch = useAppDispatch();
    const typesList = useAppSelector((state) => state.typeSlice.items);
    const categoryTypes = typesList.filter((type) => type.category === item._id);

    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch]);

    return (
        <li className={classNames(cls.CategoryList, {}, [className])} key={item.title}>
            <div className={cls.imgWrapper}>
                <img src={`http://localhost:5000/${item.image}`} alt={item.title} />
            </div>
            <div className={cls.productsTitle}>
                <h3>
                    <Link to={"/products/" + item._id}>{item.title}</Link>
                </h3>
                <ul className={cls.typesList}>
                    {categoryTypes.map((el) => {
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
