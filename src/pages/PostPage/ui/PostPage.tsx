import cls from "./PostPage.module.scss";
import { classNames } from "../../../shared/utils/classNames/classNames";
import { PostList } from "../../../shared/ui/PostList/PostList";

interface PostPageProps {
    className?: string;
}

const PostPage = ({ className }: PostPageProps) => {
    return (
        <div className={classNames(cls.PostPage, {}, [className])}>
            <div className={cls.container}>
                <div className={cls.PostContent}>
                    <PostList className="blogPage" />
                </div>
            </div>
        </div>
    );
};

export default PostPage;
