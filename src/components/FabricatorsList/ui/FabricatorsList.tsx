import { memo, useEffect } from "react";
import { fetchFabricators } from "../../../features/fabricatorSlice";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import cls from "./FabricatorsList.module.scss";
import { FabricatorCard } from "../../../shared/ui/FabricatorCard/FabricatorCard";
import { useLocation } from "react-router-dom";
import SkeletonFabricator from "../../../shared/ui/Skeletons/SkeletonFabricator";

interface FabricatorsListProps {
    className?: string;
}

export const FabricatorsList = memo(({ className }: FabricatorsListProps) => {
    const dispatch = useAppDispatch();
    const fabricators = useAppSelector((state) => state.fabricator.items);
    const isLoading = useAppSelector((state) => state.fabricator.isLoading);

    const loc = useLocation().pathname;
    const fabricatorsPage = loc !== "/";

    useEffect(() => {
        dispatch(fetchFabricators());
    }, [dispatch]);

    return (
        <div className={classNames(cls.FabricatorsList, {}, [className])}>
            <div className={cls.container}>
                {fabricatorsPage ? (
                    <section className={cls.fabricatorsText}>
                        <p>
                            В нашем магазине представлены товары различных торговых марок со всего
                            мира. Здесь вы можете подробнее ознакомиться с ними!
                        </p>
                    </section>
                ) : (
                    <h3 className={cls.fabricatorsListTitle}>Производители</h3>
                )}
                <div
                    className={
                        fabricatorsPage ? cls.FabricatorsPageWrapper : cls.FabricatorsListWrapper
                    }
                >
                    {isLoading
                        ? [...new Array(12)].map((_, index) => (
                              <div key={index} className={cls.skeletonFabrList}>
                                  <SkeletonFabricator />
                              </div>
                          ))
                        : fabricators.map((fabricator) => {
                              return (
                                  <FabricatorCard key={fabricator._id} fabricator={fabricator} />
                              );
                          })}
                </div>
            </div>
        </div>
    );
});
