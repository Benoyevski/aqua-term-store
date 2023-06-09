import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";
import { CatalogPage } from "../../../../pages/CatalogPage";
import AdminPage from "../../../../pages/AdminPage/ui/AdminPage";
import { ProductListPage } from "../../../../pages/ProductListPage";
import { Loader } from "../../../../shared/ui/Loader/Loader";
import { ProductPage } from "../../../../pages/ProductPage";
import { ProfilePage } from "../../../../pages/ProfilePage";
import { ProfilePrivate } from "../../../../shared/ui/ProfilePrivate/ProfilePrivate";
import { ProfileMenu } from "../../../../components/ProfileMenu";

const AppRouter = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/catalog"} element={<CatalogPage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"/contacts"} element={<AboutPage />} />
                <Route path={"/basket"} element={<AboutPage />} />
                <Route path={"/catalog/:id"} element={<ProductListPage />} />
                <Route path={"/catalog/:categoryId/:id"} element={<ProductPage />} />
                <Route path={"/profile"} element={<ProfilePage />}>
                    <Route path={"private"} element={<ProfilePrivate />} />
                    <Route path={"changePassword"} element={<ProfilePrivate />} />
                    <Route path={"wallet"} element={<ProfilePrivate />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
