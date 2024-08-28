import { useState } from "react";
import { IProductProps } from "./interface/ProductProps.interface";

const Product = ({ product }: IProductProps) => {

    const [isShow, setIsShow] = useState(false);

    const buttonClassName = isShow ? 'bg-yellow-400' : 'bg-blue-400';
    const buttonClasses = ['py-2 px-4 border', buttonClassName]

    const onCkickHandler = () => {
        setIsShow((prev) => !prev)
    }

    return (
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}$</p>
            <button
                className={buttonClasses.join(' ')}
                onClick={onCkickHandler}
            >
                {isShow ? 'Hide' : 'Show'} details
            </button>
            { isShow && <p>{product.description}</p> }
            <p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating?.rate}</span></p>
        </div>
    );
};

export { Product };