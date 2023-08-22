import { useLocation } from "react-router-dom";
import { selectBasket } from "../../../features/basketSlice";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./FixedBasket.module.scss";
import { exceptPaths } from "../../../shared/utils/const/common";
import React from "react";
import { BsCart3 } from "react-icons/bs";

interface FixedBasketProps {
    className?: string;
}

export const FixedBasket = ({ className }: FixedBasketProps) => {
    const [showBasket, setShowBasket] = React.useState(false);
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
            className={classNames(
                cls.FixedBasket,
                { [cls.hidden]: unvisibleBasket, [cls.showBasket]: showBasket },
                [className],
            )}
        >
            <div onClick={() => setShowBasket(!showBasket)} className={cls.show}>
                <span>
                    <p>{products.length}</p>
                </span>
                <BsCart3 />
            </div>

            <div className={cls.collapsedBasket}></div>
        </div>
    );
};
