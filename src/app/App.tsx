import { AppRouter } from "./providers/router";
import { InfoHeader } from "../components/InfoHeader";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Breadcrumbs } from "../components/Breadcrumbs";

function App() {
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
