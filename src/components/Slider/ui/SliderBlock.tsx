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
                            <img src='rad-slider.jpg' alt='radiators' />
                            <div className={cls.text}>
                                <h4>Радиаторы</h4>
                                <p>Большой выбор радиаторов</p>
                            </div>
                        </div>
                        <div className={cls.smallSlide}>
                            <img src='kotly-slider.jpg' alt='kotly' />
                            <div className={cls.text}>
                                <h4>Котлы</h4>
                                <p>Электрические, газовые, настенные</p>
                            </div>
                        </div>
                    </div>
                    <div className={cls.slider}>
                        <img src='slider1.jpg' alt='slider' />
                        <div className={cls.sliderText}>
                            <h3>
                                Котлы, радиаторы, <br /> обогреватели, радиаторы, <br />
                                теплый пол
                            </h3>
                            <p>Все для гарантии тепла и комфорта в вашем доме по лучшим ценам!</p>
                        </div>
                    </div>
                    <div className={cls.columnSlides}>
                        <div className={cls.smallSlide}>
                            <img src='pol-slider.jpg' alt='pol' />
                            <div className={cls.text}>
                                <h4>Теплый пол</h4>
                                <p>Под любое покрытие</p>
                            </div>
                        </div>
                        <div className={cls.smallSlide}>
                            <img src='truby-slider.jpg' alt='truby' />
                            <div className={cls.text}>
                                <h4>Канализационные трубы</h4>
                                <p>Любых форм и размеров</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
