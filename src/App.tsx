import { Product } from "./components/Product/Product";
import { useProducts } from "./hooks/useProducts";

function App() {
    const { loading, errorLoading, loadedProducts } = useProducts();

    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {loading && <p className="text-center">Loading...</p>}
            {errorLoading && <p className="text-center text-red-800">{errorLoading}</p>}
            {
                loadedProducts.map((product) => (
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    );
}

export { App }
