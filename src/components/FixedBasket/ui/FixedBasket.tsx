import { Link, useLocation } from "react-router-dom";
import { selectBasket } from "../../../features/basketSlice";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./FixedBasket.module.scss";
import { exceptPaths } from "../../../shared/utils/const/common";
import React from "react";

interface FixedBasketProps {
    className?: string;
}

export const FixedBasket = ({ className }: FixedBasketProps) => {
    const location = useLocation().pathname;
    const { products } = useAppSelector(selectBasket);

    const isMounted = React.useRef(false);

    React.useEffect(() => {
        if (isMounted.current) {
            const json = JSON.stringify(products);
            localStorage.setItem("basket", json);
        }
        isMounted.current = true;
    }, [products]);

    const unvisibleBasket = exceptPaths.includes(location);

    return (
        <div
            className={classNames(cls.FixedBasket, { [cls.hidden]: unvisibleBasket }, [className])}
        >
            <Link to={"/basket"}>
                <span>
                    <p>{products.length}</p>
                </span>
            </Link>
        </div>
    );
};
