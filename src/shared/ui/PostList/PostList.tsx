import cls from "./PostList.module.scss";
import { classNames } from "../../utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { useEffect } from "react";
import { fetchPosts } from "../../../features/postSlice";
import { PostCard } from "../../../shared/ui/PostCard/PostCard";
import { BlogPageCard } from "../BlogPageCard/BlogPageCard";

interface PostListProps {
    className?: string;
}

export const PostList = ({ className }: PostListProps) => {
    const dispatch = useAppDispatch();

    const posts = useAppSelector((state) => state.post.posts);
    const isLoadingPosts = useAppSelector((state) => state.post.isLoading);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className={classNames(cls.PostList, {}, [className])}>
            {isLoadingPosts ? (
                <div>loading posts....</div>
            ) : (
                <div className={classNames(cls.blogList, { [cls.blogPage]: className })}>
                    {posts.map((post) => {
                        return className === "blogPage" ? (
                            <BlogPageCard post={post} />
                        ) : (
                            <PostCard key={post._id} post={post} />
                        );
                    })}
                </div>
            )}
        </div>
    );
};
