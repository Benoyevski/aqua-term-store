import { Link } from "react-router-dom";
import { IProduct } from "../../types/types";
import cls from "./SearchedProduct.module.scss";
import { memo } from "react";
import { serverUrl } from "../../../serverUrl";

interface SearchedProductProps {
    product: IProduct;
}

export const SearchedProduct = memo(({ product }: SearchedProductProps) => {
    return (
        <Link to={`/catalog/${product.category}/${product._id}`}>
            <div className={cls.searchItem} key={product._id}>
                <div className={cls.searchProductContainer}>
                    <div className={cls.searchProdImage}>
                        <img src={`${serverUrl}${product.image}`} alt={product.name} />
                    </div>
                    <p className={cls.searchProdTitle}>{product.name}</p>
                </div>
            </div>
        </Link>
    );
});
