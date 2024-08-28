import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { ICreateProductProps } from "./interface/CreateProduct.interface";
import axios from "axios";
import { IProduct } from "../../data/products.interface";


const CreateProduct = ({onCreate}: ICreateProductProps) => {

    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');
        if (value.trim().length === 0) {
            setError('Please, enter valid title!');
            return;
        }
        
        const response = await axios.post<IProduct>('https://fakestoreapi.com/products', {
            title: value,
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://i.pravatar.cc',
            category: 'electronic', 
            rating: {
                rate: 40,
                coint: 10
            }
        });

        onCreate(response.data);
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setError('')
        setValue(event.target.value)
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product title"
                value={value}
                onChange={changeHandler}

            />
            {error && <ErrorMessage errorLoading={error} />}
            <button
                className="py-2 px-4 border bg-yellow-400 hover:text-white"
                type="submit"
            >
                Create
            </button>
        </form>
    );
};

export { CreateProduct };
