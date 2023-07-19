import { useEffect } from "react";
import { fetchFabricators } from "../../../features/fabricatorSlice";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./FabricatorsList.module.scss";
import { FabricatorCard } from "../../../shared/ui/FabricatorCard/FabricatorCard";

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
                        return <FabricatorCard key={fabricator._id} fabricator={fabricator} />;
                    })}
                </div>
            </div>
        </div>
    );
};
