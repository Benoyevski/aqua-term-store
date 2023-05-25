import { CatalogForm } from "../../../components/AdminPanel";
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
                <CatalogForm />
            </div>
        </div>
    );
};

export default AdminPage;
