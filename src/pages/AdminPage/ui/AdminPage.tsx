import { CategoryAddForm } from "../../../components/AdminPanel";
import { AddProductForm } from "../../../components/AdminPanel/ProductForm/AddProductForm/AddProductForm";
import { AddTypeForm } from "../../../components/AdminPanel/TypesForm/AddTypeForm/AddTypeForm";
import { classNames } from "../../../shared/classNames/classNames";
import cls from "./AdminPage.module.scss";

interface AdminPageProps {
    className?: string;
}

export const AdminPage = ({ className }: AdminPageProps) => {
    return (
        <div className={cls.container}>
            <div className={classNames(cls.AdminPage, {}, [className])}>
                <h1>Страница Администратора!</h1>
                <section className={cls.section}>
                    <CategoryAddForm />
                </section>
                <section className={cls.section}>
                    <AddTypeForm />
                </section>
                <section className={cls.section}>
                    <AddProductForm />
                </section>
            </div>
        </div>
    );
};

export default AdminPage;
