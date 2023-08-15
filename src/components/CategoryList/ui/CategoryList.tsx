import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { CategoryCard } from "../../../shared/ui/CategoryCard/CategoryCard";
import cls from "./CategoryList.module.scss";
import { fetchCategories } from "../../../features/categorySlice";
import { fetchTypes } from "../../../features/typeSlice";
import SkeletonCategory from "../../../shared/ui/Skeletons/SkeletonCategory";

interface CategoryListProps {
    className?: string;
    popularity?: boolean;
}

export const CategoryList = ({ className, popularity }: CategoryListProps) => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category.items);
    const types = useAppSelector((state) => state.typeSlice.items);
    const isLoading = useAppSelector((state) => state.category.isLoading);

    useEffect(() => {
        // Проверяем, есть ли данные о категориях и типах в хранилище Redux
        if (categories.length === 0) {
            dispatch(fetchCategories());
        }

        if (types.length === 0) {
            dispatch(fetchTypes());
        }
    }, [dispatch, categories, types]);

    const sortedCategories = popularity
        ? [...categories].sort((a, b) => (b.popularity || 0) - (a.popularity || 0)).slice(0, 9)
        : categories;

    return (
        <ul className={classNames(cls.CategoryList, {}, [className])}>
            {isLoading
                ? [...new Array(9)].map((_, index) => (
                      <div className={cls.skeletonCat}>
                          <SkeletonCategory key={index} />
                      </div>
                  ))
                : sortedCategories.map((category) => {
                      return (
                          <CategoryCard
                              popularBlock={popularity}
                              category={category}
                              typeList={types}
                              key={category._id}
                          />
                      );
                  })}
        </ul>
    );
};
