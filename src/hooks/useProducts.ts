import { useState, useEffect, useCallback } from "react";
import { IProduct } from "../data/products.interface";
const useProducts = () => {
    const [loadedProducts, setLoadedProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState('');

    const load = useCallback(async () => {
        try {
            setErrorLoading('');
            setLoading(true)
            const response = await fetch('https://fakestoreapi.com/products');
            const data: IProduct[] = await response.json();
            setLoadedProducts(data);
            setLoading(false)
        } catch (error) {
            if (error instanceof Error) {
                setErrorLoading(error.message)
            } else {
                throw new Error('Undefined error while loading!')
            }
        }
        finally {
            setLoading(false)
        }

    }, []);


    useEffect(() => {
        load();
    }, [load]);

    return {loadedProducts, loading, errorLoading}
};

export { useProducts };