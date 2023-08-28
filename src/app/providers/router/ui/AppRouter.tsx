import { Suspense, memo } from "react";
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
import { useAppSelector } from "../../../../shared/utils/hooks/hooks";
import { ProfileWallet } from "../../../../shared/ui/ProfileWallet/ProfileWallet";
import { ChangePassword } from "../../../../shared/ui/ChangePassword/ChangePassword";
import { FabricatorsList } from "../../../../components/FabricatorsList";
import { Stocks } from "../../../../shared/ui/Stocks/Stocks";
import { FabricatorPage } from "../../../../pages/FabricatorPage";
import { ContactsPage } from "../../../../pages/ContactsPage";
import { BasketPage } from "../../../../pages/BasketPage";
import { PostPage } from "../../../../pages/PostPage";
import { PostList } from "../../../../shared/ui/PostList/PostList";

const AppRouter = memo(() => {
    const authUser = useAppSelector((state) => state.user.user);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/catalog"} element={<CatalogPage />} />
                <Route path={"/fabricators"} element={<FabricatorsList />} />
                <Route path={"/fabricators/:id"} element={<FabricatorPage />} />
                <Route path={"/sale"} element={<Stocks />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"/contacts"} element={<ContactsPage />} />
                <Route path={"/basket"} element={<BasketPage />} />
                <Route path={"/catalog/:id"} element={<ProductListPage />} />
                <Route path={"/catalog/:categoryId/:id"} element={<ProductPage />} />
                <Route path={"/blog"} element={<PostList />} />
                <Route path={"/blog/:id"} element={<PostPage />} />

                {authUser && (
                    <Route path={"/profile"} element={<ProfilePage />}>
                        <Route path={"private"} element={<ProfilePrivate />} />
                        <Route path={"changePassword"} element={<ChangePassword />} />
                        <Route path={"wallet"} element={<ProfileWallet />} />
                    </Route>
                )}
            </Routes>
        </Suspense>
    );
});
export default AppRouter;
