export const getBasketFromLS = () => {
    const data = localStorage.getItem("basket");
    const products = data ? JSON.parse(data) : [];

    return {
        products,
    };
};
