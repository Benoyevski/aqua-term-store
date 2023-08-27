import { Link } from "react-router-dom";
import { IPost } from "../../types/types";
import cls from "./BlogPageCard.module.scss";
import { timeConverter } from "../../utils/timeConverter/timeConverter";
import { memo } from "react";
interface BlogPageCardProps {
    post: IPost;
}
export const BlogPageCard = memo(({ post }: BlogPageCardProps) => {
    const textShorted = post.text.slice(0, 330) + "...";
    const postTime = timeConverter(post?.time);
    return (
        <div className={cls.blogCard} key={post._id}>
            <div className={cls.postImageWrapper}>
                <img src={`http://localhost:5000/${post.image}`} alt='postImage' />
            </div>
            <div className={cls.postInfo}>
                <h3>
                    <Link to={`/blog/${post._id}`}>{post.title}</Link>
                </h3>
                <span className={cls.postTime}>{postTime}</span>
                <p>{textShorted}</p>
            </div>
        </div>
    );
});
