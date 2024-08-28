import { useProducts } from "../hooks/useProducts";
import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
import { IProduct } from "../data/products.interface";
import { Loader } from "../components/Loader/Loader";
import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage";
import { Product } from "../components/Product/Product";
import { CreateProduct } from "../components/CreateProduct/CreateProduct";
import { ModalWindow } from "../components/ModalWindow/ModalWindow";

const ProductsPage = () => {
    const { loading, errorLoading, products, addProduct } = useProducts();
    
    const {modal, openModal, closeModal} = useContext(ModalContext)

    const onCreateHandler = (product: IProduct) => {
        closeModal();
        addProduct(product);
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {errorLoading && <ErrorMessage errorLoading={errorLoading} />}
            {
                products.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
            {
                modal && <ModalWindow title="Create new product" onClose={closeModal}>
                    <CreateProduct onCreate={onCreateHandler} />
                </ModalWindow>
            }
            <button
                className="rounded-full fixed right-5 bottom-5 bg-yellow-500 text-2xl text-white px-4 py-2"
                onClick={openModal}
            >
                +
            </button>
        </div>
    );
};

export { ProductsPage } 
