import { memo } from "react";
import { IReview } from "../../types/types";
import cls from "./ReviewCard.module.scss";
interface ReviewCardProps {
    review: IReview;
}
export const ReviewCard = memo(({ review }: ReviewCardProps) => {
    return (
        <div className={cls.review}>
            <div className={cls.reviewHeader}>
                <img src={review.avatar} alt={review.name} />
                <div className={cls.reviewDateAndName}>
                    <span>{review.date}</span>
                    <p>{review.name}</p>
                </div>
            </div>
            <p className={cls.reviewText}>{review.text}</p>
        </div>
    );
});
