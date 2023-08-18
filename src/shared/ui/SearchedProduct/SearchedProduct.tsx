import { Link } from "react-router-dom";
import { IProduct } from "../../types/types";
import cls from "./SearchedProduct.module.scss";

interface SearchedProductProps {
    product: IProduct;
}

export const SearchedProduct = ({ product }: SearchedProductProps) => {
    return (
        <Link to={`/catalog/${product.category}/${product._id}`}>
            <div className={cls.searchItem} key={product._id}>
                <div className={cls.searchProductContainer}>
                    <div className={cls.searchProdImage}>
                        <img src={`http://localhost:5000/${product.image}`} alt={product.name} />
                    </div>
                    <p className={cls.searchProdTitle}>{product.name}</p>
                </div>
            </div>
        </Link>
    );
};
