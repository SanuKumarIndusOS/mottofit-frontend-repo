const validation = (values) => {
    let errors = {};

    if (!values.password) {
        errors.password = " This input is required";
    } else if (values.password.length < 6) {
        errors.password = " Password should be more then 6 Charcters";
    } else if (
        !/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[\W_]).{3,}$/.test(values.password)
    ) {
        errors.password =
            " Password should contain atleast one one captial letter, number and special character";
    } else if (values.password.length > 8) {
        errors.password = "This field exceed max length";
    }

    if (!values.email) {
        errors.email = "   This field is required";
    } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
            values.email
        )
    ) {
        errors.email = " Please enter a valid email address";
    } else if (values.email.length < 8) {
        errors.email = " This field should contain greater then 8 charater";
    }

    return errors;
};

export default validation;
