import { classNames } from "../../classNames/classNames";
import cls from "./CardRender.module.scss";

interface CardRenderProps {
    className?: string;
    list: Array<{}>;
}

export const CardRender = ({ className, list }: CardRenderProps) => {
    return <div className={classNames(cls.CardRender, {}, [className])}></div>;
};
