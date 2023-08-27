import { memo } from "react";
import cls from "./AboutStore.module.scss";

export const AboutStore = memo(() => {
    return (
        <div className={cls.aboutStoreWrapper}>
            <div className={cls.container}>
                <div className={cls.aboutStore}>
                    <section className={cls.aboutStoreImage}>
                        <img className={cls.aquatermImg} src='/aquaterm.jpg' alt='' />
                    </section>
                    <section className={cls.aboutStoreText}>
                        <p>
                            Магазин Акватерм — завоевавший доверие потребителей в Чеченской
                            Республике поставщик отопительного оборудования. Ищете, где купить котел
                            в Чечне по выгодной цене и с гарантией качества? Тогда вам именно сюда.
                            Здесь представлен широчайший ассортимент товара: котлы для дома и
                            квартиры, промышленные модификации, газовые, электрические, дизельные,
                            настенные, напольные, конденсационные и многие другие.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
});
