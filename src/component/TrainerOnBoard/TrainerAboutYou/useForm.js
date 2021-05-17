import { useState, useEffect } from "react";

const useForm = (validate, callback) => {
    const [aboutTrainerData, setAboutTrainerData] = useState({
        location: "",
        dob: "",
        email: "",
        gender: "",
        phone: "",
        websiteURL: "",
        instagram: "",
        firstName: "",
    });

    const [error, setError] = useState({});
    const [isSubmit, setSubmit] = useState(false);
    const [dataSubmit, setdataSubmit] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const errorData = validate(aboutTrainerData);
        setError(errorData);
        setSubmit(true);
    };

    useEffect(() => {
        if (Object.keys(error).length === 0 && isSubmit) {
            setdataSubmit(true);
        }
    }, [error]);

    return {
        setAboutTrainerData,
        handleFormSubmit,
        error,
        aboutTrainerData,
        dataSubmit,
    };
};
export default useForm;
