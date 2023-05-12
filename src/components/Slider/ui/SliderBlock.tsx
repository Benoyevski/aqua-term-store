import { classNames } from "../../../shared/classNames/classNames";
import cls from "./SliderBlock.module.scss";

interface SliderBlockProps {
    className?: string;
}

export const SliderBlock = ({ className }: SliderBlockProps) => {
    return (
        <div className={classNames(cls.SliderBlock, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.sliderBlockWrapper}>
                    <div className={cls.columnSlides}>
                        <div className={cls.smallSlide}>
                            <img src='' alt='' />
                        </div>
                        <div className={cls.smallSlide}>
                            <img src='' alt='' />
                        </div>
                    </div>
                    <div className={cls.slider}>
                        <img src='' alt='' />
                    </div>
                    <div className={cls.columnSlides}>
                        <div className={cls.smallSlide}>
                            <img src='' alt='' />
                        </div>
                        <div className={cls.smallSlide}>
                            <img src='' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
