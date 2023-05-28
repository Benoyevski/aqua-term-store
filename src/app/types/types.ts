export interface ICategory {
    _id: string;
    title: string;
    image: string;
}

export interface IType {
    _id: string;
    title: string;
    image: string;
    category: string;
}

export interface IProduct {
    _id: string;
    name: string;
    image: string;
    category: string;
    type: string;
    price?: number;
    description?: string;
    country?: string;
    fabricator?: string;
}