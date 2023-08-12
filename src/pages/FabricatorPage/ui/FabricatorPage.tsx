import cls from "./FabricatorPage.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchFabricators } from "../../../features/fabricatorSlice";
interface FabricatorPageProps {
    className?: string;
}
const FabricatorPage = ({ className }: FabricatorPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const fabricator = useAppSelector((state) => state.fabricator.items).find(
        (fabr) => fabr._id === id,
    );
    useEffect(() => {
        dispatch(fetchFabricators());
    }, [dispatch]);

    return (
        <div className={classNames(cls.FabricatorPage, {}, [className])}>
            <div className={cls.container}>
                <main className={cls.fabricatorContent}>
                    <section className={cls.fabricatorInfo}>
                        <figure className={cls.imageWrapper}>
                            <img
                                className={cls.fabricatorImg}
                                src={`http://localhost:5000/${fabricator?.image}`}
                                alt='productImage'
                            />
                        </figure>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default FabricatorPage;
