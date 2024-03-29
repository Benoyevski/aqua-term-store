import cls from "./ProductCard.module.scss";
import { IProduct } from "../../types/types";
import { classNames } from "../../utils/classNames/classNames";
import { useAppDispatch } from "../../utils/hooks/hooks";
import { incrementProductPopularity } from "../../../features/productSlice";
import { Link } from "react-router-dom";
import { memo } from "react";
import { serverUrl } from "../../../serverUrl";

interface ProductCardProps {
    className?: string;
    prod: IProduct;
    popularity?: boolean;
}

export const ProductCard = memo(({ className, prod, popularity }: ProductCardProps) => {
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
                <img src={`${serverUrl}${prod.image}`} alt={prod.name} />
            </div>
            <h4 onClick={handleIncrementPopularity} className={cls.prodTitle}>
                <Link to={`/catalog/${prod.category}/${prod._id}`}>{prod.name}</Link>
            </h4>
        </div>
    );
});
