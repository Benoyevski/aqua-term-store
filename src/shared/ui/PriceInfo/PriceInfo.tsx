import cls from "./PriceInfo.module.scss";

export const PriceInfo = () => {
    return (
        <div className={cls.priceInfo}>
            <div className={cls.saleImage}>
                <img src='/icons/sale.png' alt='' />
            </div>
            <div className={cls.priceText}>
                <h3>Уважаемые покупатели!</h3>
                <p>
                    <span>Уточняйте актуальные цены!</span> В связи с нестабильностью курса валют
                    наши поставщики, а следовательно, и мы, вынуждены постоянно пересматривать цены
                    на представленную продукцию. Мы надеемся на скорую стабилизацию цен и сделаем
                    все возможное что бы предоставить Вам актуальную информацию.
                </p>
            </div>
        </div>
    );
};
