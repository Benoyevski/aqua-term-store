import { memo, useEffect } from "react";
import { FabricatorsList } from "../../../components/FabricatorsList";
import { PopularCategories } from "../../../components/PopularCategories/PopularCategories";
import { SliderBlock } from "../../../components/Slider";
import { AboutStore } from "../../../shared/ui/AboutStore/AboutStore";
import { Blog } from "../../../components/Blog";
import { ReviewsBlock } from "../../../components/ReviewsBlock";

const MainPage = memo(() => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка в начало страницы при монтировании компонента
    }, []);

    
    return (
        <div>
            <SliderBlock />
            <PopularCategories />
            <AboutStore />
            <Blog />
            <ReviewsBlock />
            <FabricatorsList />
        </div>
    );
});

export default MainPage;
