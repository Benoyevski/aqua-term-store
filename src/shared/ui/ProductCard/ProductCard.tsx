import cls from "./ProductCard.module.scss";
import { IProduct } from "../../../app/types/types";
import { classNames } from "../../classNames/classNames";

interface ProductCardProps {
    className?: string;
    prod: IProduct;
}
export const ProductCard = ({ className, prod }: ProductCardProps) => {
    return (
        <div className={classNames(cls.ProductCard, {}, [className])}>
            <div>
                <img src={`http://localhost:5000/${prod.image}`} alt={prod.name} />
            </div>
            <p className={cls.prodTitle}>{prod.name}</p>
            <p className={cls.prodPrice}>{prod.price}</p>
        </div>
    );
};
