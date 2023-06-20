export interface IUser {
    _id: string;
    login: string;
    password: string;
    email: string;
    avatar: string;
    role: string;
}

export interface ILoginFormData {
    login: string;
    email: string;
    password: string;
}

export interface ICategory {
    _id: string;
    title: string;
    image: string;
    popularity: number;
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
    popularity: number;
}

export type ItemsToCard = IType | IProduct;
