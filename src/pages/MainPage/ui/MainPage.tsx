import { FabricatorsList } from "../../../components/FabricatorsList";
import { PopularCategories } from "../../../components/PopularCategories/PopularCategories";
import { SliderBlock } from "../../../components/Slider";

const MainPage = () => {
    return (
        <div>
            <SliderBlock />

            <PopularCategories />
            <FabricatorsList />
        </div>
    );
};

export default MainPage;
