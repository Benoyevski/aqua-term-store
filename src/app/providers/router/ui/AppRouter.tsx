import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AboutPage } from "../../../../pages/AboutPage";
import { MainPage } from "../../../../pages/MainPage";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
