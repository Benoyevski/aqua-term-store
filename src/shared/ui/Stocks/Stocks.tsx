import cls from "./Stocks.module.scss";
interface StocksProps {
    className?: string;
}
export const Stocks = ({ className }: StocksProps) => {
    return (
        <div className={cls.StocksWrapper}>
            <div className={cls.container}>
                <section className={cls.stocks}>
                    <p className={cls.stocksInfo}>
                        Промо-акция — это разновидность рекламной активности, при которой происходит
                        прямой контакт с потребителем товаров или услуг. Во время этого контакта
                        потенциальный покупатель получает информацию о товаре, услуге, условиях
                        акций и скидках. Общая цель проведения промо-акций всегда одна — увеличение
                        продаж. Но достигаться эта цель может путем реализации различных задач. В
                        зависимости от поставленных задач, выбирается механика планируемой
                        промо-акции.
                    </p>
                    <p className={cls.notStocks}>Здесь пока нет акций!</p>
                </section>
            </div>
        </div>
    );
};
