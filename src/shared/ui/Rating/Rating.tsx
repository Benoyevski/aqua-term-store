import { BsStar } from "react-icons/bs";
import cls from "./Rating.module.scss";
import { memo } from "react";
export const Rating = memo(() => {
    return (
        <div className={cls.RatingWrapper}>
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
        </div>
    );
});
