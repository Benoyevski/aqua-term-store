import cls from "./CatalogPage.module.scss";
import { CategoryList } from "../../../components/CategoryList/ui/CategoryList";

const CatalogPage = () => {
    return (
        <div className={cls.container}>
            <div className={cls.Catalog}>
                <CategoryList popularity={false} />
            </div>
        </div>
    );
};

export default CatalogPage;
