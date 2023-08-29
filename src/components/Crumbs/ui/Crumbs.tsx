import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { memo, useEffect } from "react";
import { fetchCategories } from "../../../features/categorySlice";
import { fetchFabricators } from "../../../features/fabricatorSlice";
import cls from "./Crumbs.module.scss";
import { fetchProducts } from "../../../features/productSlice";
import { routeNames } from "../../../shared/utils/const/common";
import { fetchPosts } from "../../../features/postSlice";

export const Crumbs = memo(() => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchProducts());
        dispatch(fetchFabricators());
        dispatch(fetchPosts());
    }, [dispatch]);

    const categories = useAppSelector((state) => state.category.items);
    const products = useAppSelector((state) => state.product.items);
    const fabricators = useAppSelector((state) => state.fabricator.items);
    const posts = useAppSelector((state) => state.post.posts);

    const pathnames = location.pathname.split("/").filter((x) => x);
    return location.pathname === "/" ? null : (
        <div className={cls.Crumbs}>
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
                        const categoryAndPost =
                            categories.find((category) => category._id === value) ||
                            posts.find((post) => post._id === value);
                        const product = products.find((product) => product._id === value);
                        const fabricator = fabricators.find(
                            (fabricator) => fabricator._id === value,
                        );

                        const routeName = routeNames[value];

                        return (
                            <li className={cls.breadcrumbItem} key={index}>
                                {last ? (
                                    categoryAndPost ? (
                                        <div className={cls.currentBreadcrumb}>
                                            <p>{categoryAndPost.title}</p>
                                            <h1>{categoryAndPost.title}</h1>
                                        </div>
                                    ) : product ? (
                                        <div className={cls.currentBreadcrumb}>
                                            <p>{product.name}</p>
                                            <h1>{product.name}</h1>
                                        </div>
                                    ) : fabricator ? (
                                        <div className={cls.currentBreadcrumb}>
                                            <p>{fabricator.title}</p>
                                            <h1>{fabricator.title}</h1>
                                        </div>
                                    ) : (
                                        <div className={cls.currentBreadcrumb}>
                                            <p>{routeName || "Not Found Page"}</p>
                                            <h1>{routeName || "Not Found Page"}</h1>
                                        </div>
                                    )
                                ) : (
                                    <div className={cls.breadcrumbItem}>
                                        <Link className={cls.breadcrumbItemLink} to={to}>
                                            {categoryAndPost
                                                ? categoryAndPost.title
                                                : product
                                                    ? product.name
                                                    : fabricator
                                                        ? fabricator.title
                                                        : routeName || ""}
                                        </Link>
                                        <span className={cls.breadcrumbDash}>-</span>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
});


