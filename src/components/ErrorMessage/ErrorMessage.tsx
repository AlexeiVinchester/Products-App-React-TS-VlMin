import { IErrorMessageProps } from "./interface/ErrorMessage.interface";

const ErrorMessage = ({errorLoading}: IErrorMessageProps) => {
    return (
        <p className="text-center text-red-800">{errorLoading}</p>
    );
};

export { ErrorMessage };
