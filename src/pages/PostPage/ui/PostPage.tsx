import cls from "./PostPage.module.scss";
import { useEffect } from "react";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { useAppDispatch, useAppSelector } from "../../../shared/utils/hooks/hooks";
import { useParams } from "react-router-dom";
import { fetchPosts } from "../../../features/postSlice";
import { timeConverter } from "../../../shared/utils/timeConverter/timeConverter";
import { serverUrl } from "../../../serverUrl";

interface PostPageProps {
    className?: string;
}

const PostPage = ({ className }: PostPageProps) => {
    const dispatch = useAppDispatch();
    const { id } = useParams();

    const isLoadingPosts = useAppSelector((state) => state.post.isLoading);
    const post = useAppSelector((state) => state.post.posts).find((post) => post._id === id);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const postTime = timeConverter(post?.time);
    const firstParagraf = post && post?.text.indexOf(".") + 1;

    return (
        <div className={classNames(cls.PostPage, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.postPageWrapper}>
                    {isLoadingPosts ? (
                        <p>loading...</p>
                    ) : (
                        <div className={cls.post}>
                            <p className={cls.postDate}>{postTime}</p>
                            <div className={cls.postContent}>
                                <div className={cls.postImageWrapper}>
                                    <img src={`${serverUrl}${post?.image}`} alt='productImage' />
                                </div>
                                <p> {post?.text.slice(0, firstParagraf)}</p>
                                <p className={cls.firstParagrafunderline}></p>
                                <p> {post?.text.slice(firstParagraf)}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostPage;
