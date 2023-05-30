import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { CatalogPage } from "../../../../pages/CatalogPage";
import AdminPage from "../../../../pages/AdminPage/ui/AdminPage";
import { ProductList } from "../../../../pages/ProductListPage";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/catalog"} element={<CatalogPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"/products"} element={<ProductList />} />
                <Route path="/products/:id" element={<ProductList/>} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
