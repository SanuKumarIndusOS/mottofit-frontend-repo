import { useState } from "react";

const useForm = (validate) => {
    const [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        cpassword: "",
        signUpType: "email",
    });

    const [error, setError] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        cpassword: "",
    });
    // const [isSubmit, setSubmit] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const errorData = validate(data);
        setError(errorData);
        // setSubmit(true)
        // console.log(data);
        // console.log(errorData);
        // console.log(error);
        // console.log(setError);
    };

    return { data, handleFormSubmit, error, setData };
};
export default useForm;
