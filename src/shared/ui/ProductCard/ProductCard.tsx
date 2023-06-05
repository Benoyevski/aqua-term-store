import cls from "./ProductCard.module.scss";
import { IProduct } from "../../../app/types/types";
import { classNames } from "../../classNames/classNames";
import { useAppDispatch } from "../../../app/utils/hooks";
import { incrementProductPopularity } from "../../../features/productSlice";

interface ProductCardProps {
    className?: string;
    prod: IProduct;
}
export const ProductCard = ({ className, prod }: ProductCardProps) => {
    const dispatch = useAppDispatch();


    const handleIncrementPopularity = () => {
        dispatch(incrementProductPopularity(prod._id));
    };

    return (
        <div className={classNames(cls.ProductCard, {}, [className])}>
            <div>
                <img src={`http://localhost:5000/${prod.image}`} alt={prod.name} />
            </div>
            <h4 onClick={handleIncrementPopularity} className={cls.prodTitle}>{prod.name}</h4>
            <p className={cls.prodPrice}>{prod.price}</p>
        </div>
    );
};
