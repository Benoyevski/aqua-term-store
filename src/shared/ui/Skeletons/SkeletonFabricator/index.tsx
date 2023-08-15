import ContentLoader from "react-content-loader";

const SkeletonFabricator = () => (
    <ContentLoader
        speed={2}
        width={420}
        height={170}
        viewBox='0 0 420 170'
        backgroundColor='#f2f2f2'
        foregroundColor='#d6d6d6'
    >
        <rect x='70' y='50' rx='0' ry='0' width='280' height='80' />
    </ContentLoader>
);

export default SkeletonFabricator;
