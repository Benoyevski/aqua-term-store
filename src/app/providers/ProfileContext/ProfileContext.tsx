import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>;

type Props = {
    children: ReactNode;
};

interface IProfileContext {
    tab: string;
    setTab: TypeSetState<string> | null;
}

export const ProfileContext = createContext<IProfileContext>({ tab: "profile", setTab: null });

export const ProfileProvider = ({ children }: Props) => {
    const [tab, setTab] = useState<string>("profile");

    return <ProfileContext.Provider value={{ tab, setTab }}>{children}</ProfileContext.Provider>;
};
