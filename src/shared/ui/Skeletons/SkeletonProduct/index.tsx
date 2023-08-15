import ContentLoader from "react-content-loader";

const SkeletonProduct = () => (
    <ContentLoader
        speed={2}
        width={230}
        height={230}
        viewBox='0 0 230 230'
        backgroundColor="#f2f2f2"
        foregroundColor="#d6d6d6"
    >
        <rect x='55' y='20' rx='10' ry='10' width='120' height='120' />
        <rect x='20' y='160' rx='0' ry='0' width='180' height='46' />
    </ContentLoader>
);

export default SkeletonProduct;
