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
                    <img
                        className={cls.fabricatorImg}
                        src={`http://localhost:5000/${post.image}`}
                        alt='postImage'
                    />
                    <p>{post.title}</p>
                </div>
            </Link>
        </div>
    );
};
