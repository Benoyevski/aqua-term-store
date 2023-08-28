import { MdLocationOn, MdLocalPhone, MdEmail } from "react-icons/md";
import { LuClock } from "react-icons/lu";
import cls from "./ContactsBlock.module.scss";

const ContactsBlock = () => {
    return (
        <section className={cls.contactsRow}>
            <div>
                <span>
                    <MdLocationOn />
                </span>
                <div className={cls.columnBlock}>
                    <h3>Адрес</h3>
                    <p>г.Урус-Мартан,</p>
                    <p>ул.Нурди Усамова</p>

                </div>

            </div>
            <div>
                <span>
                    <MdLocalPhone />
                </span>
                <div className={cls.columnBlock}>
                    <h3>Телефон</h3>
                    <p>+7 (967) 000-77-27</p>

                </div>
            </div>
            <div>
                <span>
                    <MdEmail />
                </span>
                <div className={cls.columnBlock}>
                    <h3>E-mail</h3>
                    <p>mansur@dzhan.ru</p>

                </div>
            </div>
            <div>
                <span>
                    <LuClock />
                </span>
                <div className={cls.columnBlock}>
                    <h3>Режим работы</h3>
                    <p>с 10:00 до 22:00</p>
                    <p>Пятница: с 15:00</p>

                </div>
            </div>
        </section>
    );
};

export default ContactsBlock;
