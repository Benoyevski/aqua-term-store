import { ChangeEvent, FC, useEffect } from "react";
import { useState } from "react";
import { classNames } from "../../../shared/utils/classNames/classNames";
import cls from "./Search.module.scss";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { fetchProducts } from "../../../features/productSlice";
import { IProduct } from "../../../shared/types/types";

interface SearchProps {
    className?: string;
}

export const Search: FC = ({ className }: SearchProps) => {
    const dispatch = useAppDispatch();
    const [inputActive, setInputActive] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");

    const products: IProduct[] = useAppSelector((state) => state.product.items);
    const searchedProducts = products.filter(
        (el) => inputValue.length > 2 && el.name.toLowerCase().includes(inputValue.toLowerCase()),
    );

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleInputActive = () => {
        setInputActive(!inputActive);
    };

    const handleCloseInput = () => {
        setInputActive(false);
        setInputValue("");
    };

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className={classNames(cls.Search, {}, [className])}>
            <div className={cls.searchWrap}>
                <img
                    onClick={handleInputActive}
                    className={cls.searchIcon}
                    src='/icons/search.png'
                    alt='lupa'
                />
            </div>
            <div className={inputActive ? cls.SearchInputDropdownActive : cls.SearchInputDropdown}>
                <div className={cls.container}>
                    <div className={cls.inputWrapper}>
                        <input
                            value={inputValue}
                            onChange={handleChangeInput}
                            placeholder='Поиск'
                            type='text'
                        />

                        <span onClick={handleCloseInput} className={cls.closeInputBtn}>
                            X
                        </span>
                    </div>
                </div>
                <div
                    className={classNames(cls.searchItemList, { [cls.hidden]: !inputActive }, [
                        className,
                    ])}
                >
                    <div className={cls.searchItemWrapper}>
                        <div className={cls.container}>
                            {searchedProducts?.map((el) => (
                                <div className={cls.searchItem} key={el._id}>
                                    {el.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
