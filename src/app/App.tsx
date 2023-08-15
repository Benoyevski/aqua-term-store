import { AppRouter } from "./providers/router";
import { InfoHeader } from "../components/InfoHeader";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { useAppDispatch } from "../shared/utils/hooks/hooks";
import { logout } from "../features/userSlice";

function App() {
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
            <Breadcrumbs />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
