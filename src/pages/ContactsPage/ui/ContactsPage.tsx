import ContactsBlock from "../../../shared/ui/ContactsBlock/ContactsBlock";
import { classNames } from "../../../shared/utils/classNames/classNames";
import cls from "./ContactsPage.module.scss";
import { Map, Placemark, ZoomControl } from "@pbe/react-yandex-maps";

interface ContactsPageProps {
    className?: string;
}
const ContactsPage = ({ className }: ContactsPageProps) => {
    return (
        <div className={classNames(cls.ContactsPage, {}, [className])}>
            <div className={cls.map}>
                <Map
                    instanceRef={(ref) => {
                        ref && ref.behaviors.disable("scrollZoom");
                    }}
                    className={cls.myMap}
                    defaultState={{
                        center: [43.139684, 45.558856],
                        zoom: 14,
                        controls: ["fullscreenControl"],
                    }}
                    modules={["control.FullscreenControl"]}
                >
                    <ZoomControl options={{}} />
                    <Placemark defaultGeometry={[43.139684, 45.558856]} />
                </Map>
                <div className={cls.contactsBlock}>
                    <ContactsBlock />
                </div>
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
