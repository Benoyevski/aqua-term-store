import { classNames } from "../../utils/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
    className?: string;
}
export const Loader = ({ className }: LoaderProps) => (
    <div className={classNames(cls.ldsring, {}, [className])}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
