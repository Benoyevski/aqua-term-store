import { useEffect } from "react";
import { ICategory } from "../../../app/types/types";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchTypes } from "../../../features/typeSlice";
import { CategoryCard } from "../../../shared/ui/CategoryCard/CategoryCard";

interface CategoryListProps {
    item: ICategory;
}

export const CategoryList = ({ item }: CategoryListProps) => {
    const dispatch = useAppDispatch();
    const typesList = useAppSelector((state) => state.typeSlice.items);
    const categoryTypes = typesList.filter((type) => type.category === item._id);

    useEffect(() => {
        dispatch(fetchTypes());
    }, [dispatch]);

    return <CategoryCard category={item} types={categoryTypes} />;
};
