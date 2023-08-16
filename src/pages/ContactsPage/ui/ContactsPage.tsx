import ContactsBlock from "../../../shared/ui/ContactsBlock/ContactsBlock";
import ContactsMap from "../../../shared/ui/ContactsMap/ContactsMap";
import { classNames } from "../../../shared/utils/classNames/classNames";
import cls from "./ContactsPage.module.scss";
interface ContactsPageProps {
    className?: string;
}
const ContactsPage = ({ className }: ContactsPageProps) => {
    return (
        <div className={classNames(cls.ContactsPage, {}, [className])}>
            <div className={cls.map}>
                <div className={cls.contactsBlockContainer}>
                    <div className={cls.contactsBlock}>
                        <ContactsBlock />
                    </div>
                </div>
                <ContactsMap />
            </div>

            <div className={cls.container}>
                <main className={cls.contactsWrapper}>
                    <section className={cls.contactsText}>
                        <p>
                            Наш магазин находится в г.Урус-Мартан. Мы всегда рады новым гостям,
                            приходите, не стесняйтесь.
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default ContactsPage;
