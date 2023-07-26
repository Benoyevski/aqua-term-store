import { useAppSelector } from "../../utils/hooks/hooks";
import cls from "./ProfileWallet.module.scss";
interface ProfileWalletProps {
    className?: string;
}
export const ProfileWallet = ({ className }: ProfileWalletProps) => {
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
