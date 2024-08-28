import { IProduct } from "../../../data/products.interface";

export interface ICreateProductProps {
    onCreate: (product: IProduct) => void;
}