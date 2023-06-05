import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { CatalogPage } from "../../../../pages/CatalogPage";
import AdminPage from "../../../../pages/AdminPage/ui/AdminPage";
import { ProductListPage } from "../../../../pages/ProductListPage";
import { Loader } from "../../../../shared/ui/Loader/Loader";

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/catalog"} element={<CatalogPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"/products/:id"} element={<ProductListPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
