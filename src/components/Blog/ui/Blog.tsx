import cls from "./Blog.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { useEffect } from "react";
import { fetchPosts } from "../../../features/postSlice";
import { PostCard } from "../../../shared/ui/PostCard/PostCard";
interface BlogProps {
    className?: string;
}
export const Blog = ({ className }: BlogProps) => {
    const dispatch = useAppDispatch();

    const posts = useAppSelector((state) => state.post.posts);
    const isLoadingPosts = useAppSelector((state) => state.post.isLoading);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.Blog, {}, [className])}>
            <div className={cls.container}>
                <section className={cls.blogContent}>
                    <div className={cls.blogContentHeader}>
                        <h3>Блог Админа</h3>
                        <p>Все посты</p>
                    </div>
                    {isLoadingPosts ? (
                        <div>loading posts....</div>
                    ) : (
                        <div className={cls.blogList}>
                            {posts.map((post) => {
                                return <PostCard key={post._id} post={post} />;
                            })}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};
