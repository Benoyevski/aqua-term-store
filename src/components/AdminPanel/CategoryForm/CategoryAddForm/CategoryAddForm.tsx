import React, { useState } from "react";
import { addCategory } from "../../../../features/categorySlice";
import { useAppDispatch } from "../../../../app/utils/hooks";
import cls from "./CategoryAddForm.module.scss";
import { classNames } from "../../../../shared/classNames/classNames";

interface CategoryAddForm {
    className?: string;
}

export const CategoryAddForm: React.FC = ({ className }: CategoryAddForm) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("title", title);
        if (image) {
            formData.append("image", image);
        }

        dispatch(addCategory(formData));
        setTitle("");
        setImage(null);
    };

    return (
        <div className={classNames(cls.CategoryAddForm, {}, [className])}>
            <form onSubmit={handleSubmit}>
                <div className={cls.inputBlock}>
                    <label htmlFor='title'>Название категории:</label>
                    <input
                        className={cls.textInput}
                        type='text'
                        id='title'
                        value={title}
                        onChange={handleTitleChange}
                    />
                </div>
                <div>
                    <input onChange={handleImageChange} type='file' id='file' />
                    <label htmlFor='file' className={cls.btn}>
                        Выбрать картинку
                    </label>
                </div>
                <button className={cls.submitBtn} disabled={!title || !image} type='submit'>
                    Добавить категорию
                </button>
            </form>
        </div>
    );
};
