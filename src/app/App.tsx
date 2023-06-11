import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import { InfoHeader } from "../components/InfoHeader";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";

function App() {
    return (
        <div className='app'>
            <InfoHeader />
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <Link to={"/catalog"}>Каталог</Link>
            <Link to={"/admin"}>Админка</Link>
            <Link to={"/products"}>Товары</Link>
            <Navbar />
            <Breadcrumbs />
            <AppRouter />
            <Footer />
        </div>
    );
}

export default App;
