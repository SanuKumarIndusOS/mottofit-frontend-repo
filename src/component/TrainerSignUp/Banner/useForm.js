import { useState, useEffect } from "react";

const useForm = (validate) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        cpassword: "",
        signUpType: "email",
    });

    const [error, setError] = useState({});
    const [isSubmit, setSubmit] = useState(false);
    const [dataSubmit, setdataSubmit] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const errorData = validate(data);
        setError(errorData);
        setSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmit) {
            setdataSubmit(true);
        }
    }, [error]);

    return { data, handleFormSubmit, error, setData, dataSubmit };
};
export default useForm;
