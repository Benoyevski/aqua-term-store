import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/utils/hooks";
import { classNames } from "../../../../shared/classNames/classNames";
import cls from "./AddTypeForm.module.scss";
import { addType } from "../../../../features/typeSlice";
import { fetchCategories } from "../../../../features/categorySlice";

interface AddTypeFormProps {
    className?: string;
}

export const AddTypeForm: React.FC = ({ className }: AddTypeFormProps) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("");

    const categories = useAppSelector((state) => state.category.items);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

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
        formData.append("category", selectedCategory);
        if (image) {
            formData.append("image", image);
        }

        dispatch(addType(formData));
        setTitle("");
        setImage(null);
    };

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };

    return (
        <div className={classNames(cls.AddTypeForm, {}, [className])}>
            <form onSubmit={handleSubmit}>
                <select
                    onChange={handleSelectCategory}
                    defaultValue={"Категория"}
                    name='categoryList'
                >
                    <option value={"Категория"} disabled>
                        Категория
                    </option>
                    {categories.map((category) => (
                        <option value={category._id} key={category._id}>
                            {category.title}
                        </option>
                    ))}
                </select>

                <div className={cls.inputBlock}>
                    <label htmlFor='title'>Название подкатегории:</label>
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
                <button
                    className={cls.submitBtn}
                    disabled={!title || !image || !selectedCategory}
                    type='submit'
                >
                    Добавить подкатегорию
                </button>
            </form>
        </div>
    );
};
