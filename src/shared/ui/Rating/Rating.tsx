import { BsStar } from "react-icons/bs";
import cls from "./Rating.module.scss";
export const Rating = () => {
    return (
        <div className={cls.RatingWrapper}>
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
            <BsStar />
        </div>
    );
};
