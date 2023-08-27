import cls from "./Blog.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { PostList } from "../../../shared/ui/PostList/PostList";
import { Link } from "react-router-dom";
import { memo } from "react";
interface BlogProps {
    className?: string;
}
export const Blog = memo(({ className }: BlogProps) => {
    return (
        <div className={classNames(cls.Blog, {}, [className])}>
            <div className={cls.container}>
                <section className={cls.blogContent}>
                    <div className={cls.blogContentHeader}>
                        <h3>Блог Админа</h3>
                        <Link to={`/blog`}>
                            <p>Все посты</p>
                        </Link>
                    </div>
                    <PostList />
                </section>
            </div>
        </div>
    );
});
