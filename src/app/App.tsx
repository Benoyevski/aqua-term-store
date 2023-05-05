import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import { InfoHeader } from "../components/InfoHeader";

function App() {
    return (
        <div className='app'>
            <InfoHeader />
            <Link to={"/"}>Главная</Link>
            <Link to={"/about"}>О сайте</Link>
            <AppRouter />
        </div>
    );
}

export default App;
