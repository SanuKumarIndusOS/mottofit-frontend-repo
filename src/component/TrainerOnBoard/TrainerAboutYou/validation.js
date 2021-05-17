const validation = (values) => {
    let errors = {};

    if (!values.name) {
        errors.name = "This field is required";
    } else if (values.name.length <= 1) {
        errors.name = "This field should contain more than one character";
    }
    //  } else if(!/^([a-z']+(-| )?)+$/i.test(values.name)){
    //      errors.name=" Enter a valid name"
    //  }
    else if (!/^[a-zA-Z]+(\s[a-zA-Z]+)+$/gm.test(values.name)) {
        errors.name = "Enter full name";
    } else if (!/^[a-zA-Z]+\s[a-zA-Z]+\s?$/g.test(values.name)) {
        errors.name = " Enter a valid name";
    }

    // ^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)
    // else if(!/^[A-Za-z_ ]+$/i.test(values.name)){
    //     errors.name=" This field accept only alphabets"
    // }

    // else if(!/^([a-z']+(-| )?)+$/i.test(values.name)){
    //     errors.name=" Enter a valid name"
    // }
    //   ^\s*([A-Za-z]{1,}([\.,] |[-']| ))+[A-Za-z]+\.?\s*$

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

    if (!values.phoneNumber) {
        errors.phoneNumber = "   This field is required";
    } else if (!/^[0-9]*$/i.test(values.phoneNumber)) {
        errors.phoneNumber = "Invalid Number";
    } else if (values.phoneNumber.length < 11) {
        errors.phoneNumber = "Enter a valid number";
    } else if (values.phoneNumber.length >= 12) {
        errors.phoneNumber = " This field exceed max length";
    }
    //  else if(!/^[0-9]*$/i.test(values.phone)){
    //     errors.phoneNumber = 'Invalid Number'

    // else if(!/^\+(?:[0-9]●?){6,14}[0-9]$/i.test(values.phoneNumber)){
    //     errors.phoneNumber = 'Invalid Number'

    if (!values.password) {
        errors.password = "This field is required";
    } else if (values.password.length < 6) {
        errors.password = " Password should be more then 6 Charcters";
    } else if (values.password.length > 16) {
        errors.password = " This field exceed max length";
    } else if (
        !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
            values.password
        )
    ) {
        errors.password =
            " Password should be 8 characters long and contain a Capital letter, Number & Special character";
    }

    if (!values.cpassword) {
        errors.cpassword = "This field is required";
    } else if (values.cpassword.length < 6) {
        errors.cpassword = " Password should be more then 6 Charcters";
    } else if (values.cpassword.length > 16) {
        errors.cpassword = " This field exceed max length";
    } else if (
        !/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(
            values.cpassword
        )
    ) {
        errors.cpassword =
            " Password should be 8 characters long and contain a Capital letter, Number & Special character";
    } else if (values.password !== values.cpassword) {
        errors.cpassword = "  The passwords do not match";
    }

    if (!values.location) {
        errors.location = "Please select the Location";
    }
    if (!values.gender) {
        errors.gender = "Please select the Gender";
    }

    return errors;
};

export default validation;
