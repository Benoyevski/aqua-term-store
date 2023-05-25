import cls from "./CatalogForm.module.scss";
import { useState, useRef } from "react";

export const CatalogForm = () => {
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");

    const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(e.target.value);
    };

    const handleChooseImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.value);
    };

    const handleAddCategory = () => {};

    return (
        <section className={cls.formSection}>
            <h2>Добавить категорию:</h2>
            <div>
                <input
                    onChange={handleCategory}
                    value={category}
                    className={cls.textInput}
                    placeholder='Введите название категории'
                    type='text'
                />
                <input onChange={handleChooseImage} type='file' accept='.png, .jpg, .jpeg, .svg' />
            </div>
            <label htmlFor=''>
                {!image ? 'Все поля должны быть заполнены!' : 'Можно отправлять'}
                <button disabled={!image} onClick={handleAddCategory} className={cls.submitBtn}>
                    Добавить в Базу Данных
                </button>
            </label>
        </section>
    );
};
