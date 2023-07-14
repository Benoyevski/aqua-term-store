import { useEffect } from "react";
import { fetchFabricators } from "../../../features/fabricatorSlice";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./FabricatorsList.module.scss";

interface FabricatorsListProps {
    className?: string;
}

export const FabricatorsList = ({ className }: FabricatorsListProps) => {
    const dispatch = useAppDispatch();
    const fabricators = useAppSelector((state) => state.fabricator.items);

    useEffect(() => {
        dispatch(fetchFabricators());
    }, []);

    return (
        <div className={classNames(cls.FabricatorsList, {}, [className])}>
            <div className={cls.container}>
                <h2>Производители</h2>
                <div className={cls.FabricatorsListWrapper}>
                    {fabricators.map((fabricator) => {
                        return (
                            <div className={cls.fabricatorCard}>
                                <div className={cls.fabricatorsImgWrapper}>
                                    <img
                                        className={cls.fabricatorImg}
                                        src={`http://localhost:5000/${fabricator.image}`}
                                        alt='productImage'
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
