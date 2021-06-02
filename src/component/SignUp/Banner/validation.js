const validation = (values) => {
    let errors = {};

    // firstName: "",
    // lastName: "",
    // email: "",
    // phoneNo: "",
    // password: "",
    // cpassword: "",
    // location: "",

    if (!values.firstName) {
        errors.firstName = "This field is required";
    } else if (values.firstName.length <= 1) {
        errors.firstName = "This field should contain more than one character";
    } else if (!/^[A-Za-z]+$/i.test(values.firstName)) {
        errors.firstName = "  This field accepts only alphabets";
    }

    if (!values.lastName) {
        errors.lastName = "This field is required";
    } else if (values.lastName.length <= 1) {
        errors.lastName = "This field should contain more than one character";
    } else if (!/^[A-Za-z]+$/i.test(values.lastName)) {
        errors.lastName = "This field accepts only alphabets";
    }

    if (!values.location) {
        errors.location = "This field is required";
    } else if (values.location.length <= 1) {
        errors.location = "This field should contain more than one character";
    } else if (!/^[A-Za-z]+$/i.test(values.location)) {
        errors.location = "This field accepts only alphabets";
    }

    if (!values.email) {
        errors.email = "This field is required";
    } else if (
        !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(
            values.email
        )
    ) {
        errors.email = " Please enter a valid email address";
    } else if (values.email.length < 8) {
        errors.email = " This field should contain greater then 8 character";
    }

    if (!values.phoneNo) {
        errors.phoneNo = "This field is required";
    } else if (!/^[0-9]*$/i.test(values.phoneNo)) {
        errors.phoneNo = "Invalid Number";
    } else if (values.phoneNo.length < 10) {
        errors.phoneNo = "Enter a valid number";
    } else if (values.phoneNo.length >= 11) {
        errors.phoneNo = " This field exceed max length";
    }

    if (!values.password) {
        errors.password = "This field is required";
    } else if (values.password.length < 6) {
        errors.password = " Password should be more then 6 Charcters";
    } else if (values.password.length > 8) {
        errors.password = " This field exceed max length";
    } else if (
        !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
            values.password
        )
    ) {
        errors.password =
            " Password should contain atleast one one captial letter, number and special character";
    }

    if (!values.cpassword) {
        errors.cpassword = "This field is required";
    } else if (values.cpassword.length < 6) {
        errors.cpassword = " Password should be more then 6 Charcters";
    } else if (values.cpassword.length > 8) {
        errors.cpassword = " This field exceed max length";
    } else if (
        !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
            values.cpassword
        )
    ) {
        errors.cpassword =
            " Password should contain atleast one one captial letter, number and special character";
    } else if (values.password !== values.cpassword) {
        errors.cpassword = "  The passwords do not match";
    }

    return errors;
};

export default validation;
