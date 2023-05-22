import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { CatalogPage } from "../../../../pages/CatalogPage";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/catalog"} element={<CatalogPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
