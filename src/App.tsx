import { Product } from "./components/Product/Product";
import { useProducts } from "./hooks/useProducts";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { useState } from "react";
import { IProduct } from "./data/products.interface";

function App() {
    const { loading, errorLoading, products, addProduct } = useProducts();
    const [modal, setModal] = useState(true);

    const onCreateHandler = (product: IProduct) => {
        setModal(false);
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
                modal && <ModalWindow title="Create new product">
                    <CreateProduct onCreate={onCreateHandler}/>
                </ModalWindow>
            }
        </div>
    );
}

export { App }
