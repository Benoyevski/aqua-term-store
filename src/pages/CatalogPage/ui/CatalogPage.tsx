import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { fetchCategories } from "../../../features/CategorySlice";
import cls from "./Category.module.scss";

const CatalogPage = () => {
    const dispatch = useAppDispatch();
    const categoryList = useAppSelector((state) => state.category.items);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className={cls.container}>
            <h1>КАТАЛОГ</h1>
            <ul className={cls.categoryList}>
                {categoryList.map((item) => {
                    return (
                        <li className={cls.categoryCard} key={item.title}>
                            <div>
                                <img src={`http://localhost:5000/${item.image}`} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default CatalogPage;
