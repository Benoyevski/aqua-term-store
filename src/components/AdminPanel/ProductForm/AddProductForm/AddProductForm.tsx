import React, { useState, useEffect } from "react";
import { classNames } from "../../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../../shared/utils/hooks/hooks";
import cls from "./AddProductFrom.module.scss";
import { addProduct } from "../../../../features/productSlice";
import { fetchCategories } from "../../../../features/categorySlice";
import { fetchTypes } from "../../../../features/typeSlice";
import { fetchFabricators } from "../../../../features/fabricatorSlice";

interface AddProductFormProps {
    className?: string;
}

export const AddProductForm: React.FC = ({ className }: AddProductFormProps) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedType, setSelectedType] = useState("");
    const [selectedFabricator, setSelectedFabricator] = useState("");

    const categories = useAppSelector((state) => state.category.items);
    const types = useAppSelector((state) => state.typeSlice.items);
    const fabricators = useAppSelector((state) => state.fabricator.items);

    const addBtnDisable =
        title && image && selectedCategory && selectedType && price ? false : true;

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchTypes());
        dispatch(fetchFabricators());
    }, [dispatch]);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

    console.log(image);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", title);
        formData.append("price", price);
        formData.append("description", description);
        formData.append("fabricator", selectedFabricator);
        formData.append("category", selectedCategory);
        formData.append("type", selectedType);
        if (image) {
            formData.append("image", image);
        }

        dispatch(addProduct(formData));
        setTitle("");
        setImage(null);
        setPrice("");
        setDescription("");
        // setSelectedFabricator("");
        // setSelectedCategory("");
        // setSelectedType("");
    };

    const handleSelectCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(e.target.value);
    };
    const handleSelectType = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(e.target.value);
    };

    const handleSelectFabricator = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedFabricator(e.target.value);
    };

    return (
        <div className={classNames(cls.AddProductForm, {}, [className])}>
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
                <select
                    disabled={!selectedCategory}
                    onChange={handleSelectType}
                    defaultValue={"Подкатегория"}
                    name='typeList'
                >
                    <option value={"Подкатегория"} disabled>
                        Подкатегория
                    </option>
                    {types.map((type) => {
                        if (type.category === selectedCategory) {
                            return (
                                <option value={type._id} key={type._id}>
                                    {type.title}
                                </option>
                            );
                        }
                    })}
                </select>

                <select
                    onChange={handleSelectFabricator}
                    defaultValue={"Производитель"}
                    name='fabricatorsList'
                >
                    <option value={"Производитель"} disabled>
                        Производитель
                    </option>
                    {fabricators.map((fabricator) => (
                        <option value={fabricator._id} key={fabricator._id}>
                            {fabricator.title}
                        </option>
                    ))}
                </select>

                <div className={cls.inputBlock}>
                    <label htmlFor='title'>Название продукта:</label>
                    <input
                        className={cls.textInput}
                        type='text'
                        id='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor='title'>Цена:</label>
                    <input
                        className={cls.textInput}
                        type='text'
                        id='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <label htmlFor='description'>Описание:</label>
                    <input
                        className={cls.textInput}
                        type='text'
                        id='description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <input onChange={handleImageChange} type='file' id='prodImg' />
                    <label htmlFor='prodImg' className={cls.btn}>
                        Выбрать картинку
                    </label>
                </div>
                <button className={cls.submitBtn} disabled={addBtnDisable} type='submit'>
                    Добавить товар
                </button>
            </form>
        </div>
    );
};
