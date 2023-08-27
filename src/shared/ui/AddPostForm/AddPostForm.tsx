import { addPost } from "../../../features/postSlice";
import { useAppDispatch } from "../../utils/hooks/hooks";
import cls from "./AddPostForm.module.scss";
import { memo, useState } from "react";

export const AddPostForm = memo(() => {
    const dispatch = useAppDispatch();
    const [postForm, setPostForm] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const handlePostTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handlePostText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
        }
    };

    const handleAddPost = () => {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("text", text);
        if (image) {
            formData.append("image", image);
        }

        dispatch(addPost(formData));

        setTitle("");
        setText("");
        setImage(null);
    };

    return (
        <div className={cls.addPostWrapper}>
            <button onClick={() => setPostForm(!postForm)} className={cls.postFormOpen}>
                Новый пост
            </button>
            <div className={postForm ? cls.postFormVisible : cls.postFormHide}>
                <input
                    value={title}
                    onChange={handlePostTitle}
                    placeholder='Заголовок поста'
                    type='text'
                />
                <textarea
                    value={text}
                    onChange={handlePostText}
                    className={cls.textInput}
                    placeholder='Текст'
                    rows={4}
                    name='textPost'
                />
                <div>
                    <input onChange={handleSelectImage} type='file' id='file' />
                    <label htmlFor='file' className={cls.imageBtn}>
                        Выбрать картинку
                    </label>
                </div>
                <button
                    disabled={!title || !text || !image}
                    onClick={handleAddPost}
                    className={cls.addPostBtn}
                >
                    + Добавить
                </button>
            </div>
        </div>
    );
});
