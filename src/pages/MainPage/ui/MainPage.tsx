import { useEffect } from "react";
import { FabricatorsList } from "../../../components/FabricatorsList";
import { PopularCategories } from "../../../components/PopularCategories/PopularCategories";
import { SliderBlock } from "../../../components/Slider";

const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка в начало страницы при монтировании компонента
    }, []);

    return (
        <div>
            <SliderBlock />
            <PopularCategories />
            <FabricatorsList />
        </div>
    );
};

export default MainPage;
