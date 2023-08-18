import cls from "./PostCard.module.scss";
import { IPost } from "../../types/types";
interface PostCardProps {
    className?: string;
    post: IPost;
}
export const PostCard = ({ post }: PostCardProps) => {
    return (
        <div className={cls.postCard} key={post._id}>
            <div className={cls.postImageWrapper}>
                <img
                    className={cls.fabricatorImg}
                    src={`http://localhost:5000/${post.image}`}
                    alt='productImage'
                />
                <p>{post.title}</p>
            </div>
        </div>
    );
};
