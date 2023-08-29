import cls from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
    return (
        <div className={cls.NotFoundPage}>
            <div className={cls.container}>
                <div className={cls.notFoundContent}>
                    <p>СТРАНИЦА НЕ НАЙДЕНА</p>
                </div>
            </div>
        </div>
    )
}