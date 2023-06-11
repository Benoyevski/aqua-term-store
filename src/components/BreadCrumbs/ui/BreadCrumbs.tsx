import { Link, useLocation } from "react-router-dom";
import cls from "./BreadCrumbs.module.scss";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { useEffect } from "react";
import { fetchCategories } from "../../../features/categorySlice";

export const Breadcrumbs = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    const categories = useAppSelector((state) => state.category.items);
    const products = useAppSelector((state) => state.product.items);

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <div className={cls.BreadCrumbs}>
            <nav className={cls.container}>
                <ul className={cls.breadCrumbsList}>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                        // Проверяем, является ли текущее значение _id категории
                        const category = categories.find((category) => category._id === value);
                        // Проверяем, является ли текущее значение _id продукта
                        const product = products.find((product) => product._id === value);

                        return (
                            <div key={index}>
                                <li>
                                    {last ? (
                                        category ? (
                                            category.title
                                        ) : product ? (
                                            product.name
                                        ) : (
                                            value
                                        )
                                    ) : (
                                        <>
                                            <Link to={to}>
                                                {category
                                                    ? category.title
                                                    : product
                                                    ? product.name
                                                    : value}
                                            </Link>
                                            <span className={cls.breadCrumbDash}>-</span>
                                        </>
                                    )}
                                </li>
                            </div>
                        );
                    })}
                </ul>

                <h1>{}</h1>
            </nav>
        </div>
    );
};
