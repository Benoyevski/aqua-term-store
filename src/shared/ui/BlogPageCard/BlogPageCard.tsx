import { Link } from "react-router-dom";
import { IPost } from "../../types/types";
import cls from "./BlogPageCard.module.scss";
interface BlogPageCardProps {
    post: IPost;
}
export const BlogPageCard = ({ post }: BlogPageCardProps) => {
    return (
        <div className={cls.blogCard} key={post._id}>
            <div className={cls.postImageWrapper}>
                <img src={`http://localhost:5000/${post.image}`} alt='postImage' />
            </div>
            <div className={cls.postInfo}>
                <h3>
                    <Link to={`/blog/${post._id}`}>{post.title}</Link>
                </h3>
                <span>{post.time.split("T")[0].split("-").reverse().join(" : ")}</span>
                <p>{post.text}</p>
            </div>
        </div>
    );
};
