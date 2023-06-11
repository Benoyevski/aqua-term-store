import cls from "./ProductCard.module.scss";
import { IProduct } from "../../../app/types/types";
import { classNames } from "../../classNames/classNames";
import { useAppDispatch } from "../../../app/utils/hooks";
import { incrementProductPopularity } from "../../../features/productSlice";
import { Link } from "react-router-dom";

interface ProductCardProps {
    className?: string;
    prod: IProduct;
    popularity?: boolean;
}

export const ProductCard = ({ className, prod, popularity }: ProductCardProps) => {
    const dispatch = useAppDispatch();

    const handleIncrementPopularity = () => {
        dispatch(incrementProductPopularity(prod._id));
    };

    return (
        <div
            className={classNames(cls.ProductCard, { [cls.ProductCardPopular]: popularity }, [
                className,
            ])}
        >
            <div className={cls.imageWrapper}>
                <img src={`http://localhost:5000/${prod.image}`} alt={prod.name} />
            </div>
            <h4 onClick={handleIncrementPopularity} className={cls.prodTitle}>
                <Link to={`/catalog/${prod.category}/${prod._id}`}>{prod.name}</Link>
            </h4>
            <p className={cls.prodPrice}>{prod.price}</p>
        </div>
    );
};
