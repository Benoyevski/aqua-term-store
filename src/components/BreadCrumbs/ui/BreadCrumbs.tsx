import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/utils/hooks";
import { useEffect } from "react";
import { fetchCategories } from "../../../features/categorySlice";
import cls from "./Breadcrumbs.module.scss";
import { fetchProducts } from "../../../features/productSlice";

export const Breadcrumbs = () => {
    const routeNames: { [key: string]: string } = {
        catalog: "Каталог",
        about: "О сайте",
        contacts: "Контакты",
        fabricators: "Производители",
    };

    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
    }, [dispatch]);

    const categories = useAppSelector((state) => state.category.items);
    const products = useAppSelector((state) => state.product.items);

    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        location.pathname === '/' ? null : <div className={cls.Breadcrumbs}>
            <nav className={cls.container}>
                <ul className={cls.breadcrumbsList}>
                    {location.pathname === "/" ? null : (
                        <li className={cls.breadcrumbItem}>
                            <Link className={cls.breadcrumbItemLink} to='/'>
                                Главная
                            </Link>
                            <span className={cls.breadcrumbDash}>-</span>
                        </li>
                    )}

                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                        const category = categories.find((category) => category._id === value);
                        const product = products.find((product) => product._id === value);

                        const routeName = routeNames[value];

                        return (
                            <li className={cls.breadcrumbItem} key={index}>
                                {last ? (
                                    category ? (
                                        <div className={cls.currentBreadcrumb}>
                                        <p>{category.title}</p>
                                        <h1>{category.title}</h1>
                                    </div>
                                    ) : product ? (
                                        <div className={cls.currentBreadcrumb}>
                                        <p>{product.name}</p>
                                        <h1>{product.name}</h1>
                                    </div>
                                    ) : (
                                        <div className={cls.currentBreadcrumb}>
                                            <p>{routeName || ""}</p>
                                            <h1>{routeName || ""}</h1>
                                        </div>
                                    )
                                ) : (
                                    <li className={cls.breadcrumbItem}>
                                        <Link className={cls.breadcrumbItemLink} to={to}>
                                            {category
                                                ? category.title
                                                : product
                                                ? product.name
                                                : routeName || ""}
                                        </Link>
                                        <span className={cls.breadcrumbDash}>-</span>
                                    </li>
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
