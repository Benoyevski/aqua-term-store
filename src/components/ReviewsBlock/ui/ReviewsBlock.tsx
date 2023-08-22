import { ReviewCard } from "../../../shared/ui/ReviewCard/ReviewCard";
import { reviewsList } from "../../../shared/utils/const/common";
import cls from "./ReviewsBlock.module.scss";

export const ReviewsBlock = () => {
    return (
        <div className={cls.ReviewsBlockWrapper}>
            <div className={cls.container}>
                <section className={cls.reviewsBlock}>
                    <h3>О нас пишут</h3>
                    <div className={cls.reviewList}>
                        {reviewsList.map((review) => {
                            return <ReviewCard review={review} />;
                        })}
                    </div>
                </section>
            </div>
        </div>
    );
};
