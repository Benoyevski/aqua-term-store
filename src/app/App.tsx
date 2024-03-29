import { AppRouter } from "./providers/router";
import { InfoHeader } from "../components/InfoHeader";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useAppDispatch } from "../shared/utils/hooks/hooks";
import { logout } from "../features/userSlice";
import { FixedBasket } from "../components/FixedBasket";
import { memo } from "react";
import { Crumbs } from "../components/Crumbs";

const App = memo(() => {
    const dispatch = useAppDispatch();

    window.addEventListener("storage", (event) => {
        if (event.key !== "user" && event.newValue === null) {
            dispatch(logout());
        }
    });

    return (
        <div className='app'>
            <InfoHeader />
            <Navbar />
            <Crumbs/>
            <FixedBasket />
            <AppRouter />
            <Footer />
        </div>
    );
});

export default App;
