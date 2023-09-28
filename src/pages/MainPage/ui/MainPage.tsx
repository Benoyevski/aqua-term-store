import { memo, useEffect } from "react";
import { FabricatorsList } from "../../../components/FabricatorsList";
import { PopularCategories } from "../../../components/PopularCategories/PopularCategories";
import { SliderBlock } from "../../../components/Slider";
import { AboutStore } from "../../../shared/ui/AboutStore/AboutStore";
import { Blog } from "../../../components/Blog";
import { ReviewsBlock } from "../../../components/ReviewsBlock";
import { VideoBlock } from "../../../components/VideoBlock";

const MainPage = memo(() => {
    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутка в начало страницы при монтировании компонента
    }, []);

    
    return (
        <main>
            <SliderBlock />
            <VideoBlock />
            <PopularCategories />
            <AboutStore />
            <Blog />
            <ReviewsBlock />
            <FabricatorsList />
        </main>
    );
});

export default MainPage;
