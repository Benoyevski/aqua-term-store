import ContentLoader from "react-content-loader";

const SkeletonCategory = () => (
    <ContentLoader
        speed={2}
        width={455}
        height={160}
        viewBox='0 0 455 160'
        backgroundColor='#f2f2f2'
        foregroundColor='#d6d6d6'
    >
        <rect x='20' y='20' rx='0' ry='0' width='100' height='100' />
        <rect x='165' y='20' rx='0' ry='0' width='140' height='20' />
        <rect x='165' y='60' rx='0' ry='0' width='170' height='10' />
        <rect x='165' y='80' rx='0' ry='0' width='130' height='10' />
        <rect x='165' y='100' rx='0' ry='0' width='200' height='10' />
    </ContentLoader>
);

export default SkeletonCategory;
