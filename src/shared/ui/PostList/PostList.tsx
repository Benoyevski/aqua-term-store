import cls from "./PostList.module.scss";
import { classNames } from "../../utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { memo, useEffect } from "react";
import { fetchPosts } from "../../../features/postSlice";
import { PostCard } from "../../../shared/ui/PostCard/PostCard";
import { BlogPageCard } from "../BlogPageCard/BlogPageCard";
import { AddPostForm } from "../AddPostForm/AddPostForm";
import { Loader } from "../Loader/Loader";

interface PostListProps {
    className?: string;
}

export const PostList = memo(({ className }: PostListProps) => {
    const dispatch = useAppDispatch();

    const isAdmin = useAppSelector((state) => state.user.user)?.isAdmin;
    const posts = useAppSelector((state) => state.post.posts);
    const isLoadingPosts = useAppSelector((state) => state.post.isLoading);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.PostList, {}, [className])}>
            {isLoadingPosts ? (
                <Loader/>
            ) : (
                <div className={classNames(cls.blogList, { [cls.blogPage]: className })}>
                    {className ? (
                        <div className={cls.container}>
                            {isAdmin && <AddPostForm />}
                            {posts
                                .map((post) => {
                                    return <BlogPageCard key={post._id} post={post} />;
                                })
                                .reverse()}
                        </div>
                    ) : (
                        posts
                            .map((post) => {
                                return <PostCard key={post._id} post={post} />;
                            })
                            .reverse()
                    )}
                </div>
            )}
        </div>
    );
});
