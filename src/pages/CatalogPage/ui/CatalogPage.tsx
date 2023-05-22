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
        <div>
            <h1>КАТАЛОГ</h1>
            <ul>
                {categoryList.map((item) => {
                    return (
                        <li key={item.title}>
                            <p>{item.title}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CatalogPage;
