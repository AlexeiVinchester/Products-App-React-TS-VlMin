import { useState } from "react";

const CreateProduct = () => {

    const [value, setValue] = useState('');

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
    };

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
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
