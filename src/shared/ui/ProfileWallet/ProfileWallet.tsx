import { useAppSelector } from "../../utils/hooks/hooks";
import cls from "./ProfileWallet.module.scss";

export const ProfileWallet = () => {
    const userWallet = useAppSelector((state) => state.user.user?.wallet);
    return (
        <div className={cls.ProfileWallet}>
            <div className={cls.walletBlock}>
                <div className={cls.wallet}>
                    <p>СОСТОЯНИЕ СЧЕТА</p>
                    <h2>{`${userWallet} руб. `}</h2>
                </div>
                <span className={cls.currency}>
                    <h6>RUB</h6>
                    <p>Российский рубль</p>
                </span>
            </div>
        </div>
    );
};
