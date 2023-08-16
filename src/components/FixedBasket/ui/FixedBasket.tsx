import { useLocation } from "react-router-dom";
import { selectBasket } from "../../../features/basketSlice";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./FixedBasket.module.scss";
import { exceptPaths } from "../../../shared/utils/const/common";

interface FixedBasketProps {
    className?: string;
}

export const FixedBasket = ({ className }: FixedBasketProps) => {
    const location = useLocation().pathname;
    const { products } = useAppSelector(selectBasket);
    
    const unvisibleBasket = exceptPaths.includes(location);

    return (
        <div
            className={classNames(cls.FixedBasket, { [cls.hidden]: unvisibleBasket }, [className])}
        >
            <span>
                <p>{products.length}</p>
            </span>
        </div>
    );
};
