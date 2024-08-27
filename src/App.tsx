import { Product } from "./components/Product/Product";
import { useProducts } from "./hooks/useProducts";
import { Loader } from "./components/Loader/Loader";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

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
        </div>
    );
}

export { App }
