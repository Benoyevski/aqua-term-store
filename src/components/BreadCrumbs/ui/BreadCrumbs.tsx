import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { useEffect } from "react";
import { fetchCategories } from "../../../features/categorySlice";
import cls from "./Breadcrumbs.module.scss";

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
        <div className={cls.Breadcrumbs}>
            <nav className={cls.container}>
                <ul className={cls.breadcrumbsList}>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const category = categories.find((category) => category._id === value);
                        const product = products.find((product) => product._id === value);

                        return (
                                <li key={index}>
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
                        );
                    })}
                </ul>

                <h1>{}</h1>
            </nav>
        </div>
    );
};
