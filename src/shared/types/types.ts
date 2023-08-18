export interface IUser {
    _id: string;
    login: string;
    email: string;
    wallet: number;
    isAdmin: boolean;
}

export interface IRegisterData {
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

export interface IFabricator {
    _id: string;
    title: string;
    image: string;
    description: string;
}

export interface IPost {
    _id: string;
    title: string;
    text: string;
    image: string;
    time: string;
}

export interface IProduct {
    _id: string;
    name: string;
    image: string;
    category: string;
    type: string;
    price?: number;
    description?: string;
    fabricator?: string;
    popularity: number;
}

export type ItemsToCard = IType | IProduct;

export interface IMenuList {
    title: string;
    childrens?: Array<string>;
    path: string;
}

export interface IProfileTab {
    title: string;
    path: string;
    image?: string;
}
