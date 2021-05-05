const validation = (values) => {
    let errors = {};

    if (!values.fullname) {
        errors.fullname = "This field is required";
    }
    if (!values.email) {
        errors.email = "This field is required";
    }

    if (!values.password) {
        errors.password = "This field is required";
    } else if (values.password.length < 5) {
        errors.password = "Password must be more then 5";
    }
    return errors;
};

export default validation;
