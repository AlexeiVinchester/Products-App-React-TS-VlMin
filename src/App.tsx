import { Product } from "./components/Product/Product";
import { useProducts } from "./hooks/useProducts";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";

function App() {
    const { loading, errorLoading, loadedProducts } = useProducts();

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <Loader />}
            {errorLoading && <ErrorMessage errorLoading={errorLoading}/>}
            {
                loadedProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
            <ModalWindow title="Create new product">
                <CreateProduct />
            </ModalWindow>
        </div>
    );
}

export { App }
