import cls from "./PostCard.module.scss";
import { IPost } from "../../types/types";
import { Link } from "react-router-dom";
interface PostCardProps {
    className?: string;
    post: IPost;
}
export const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className={cls.postCard} key={post._id}>
            <Link to={`/blog/${post._id}`}>
                <div className={cls.postImageWrapper}>
                    <img src={`http://localhost:5000/${post.image}`} alt='postImage' />
                </div>
                <p>{post.title}</p>
            </Link>
        </div>
    );
};
