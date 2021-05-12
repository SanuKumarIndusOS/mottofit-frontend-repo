import { useState, useEffect} from 'react';

const useForm = (validate, callback) => {

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        password: "",
        cpassword: "",
        location: "",
        signUpType: "email",
    });


    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        password: "",
        cpassword: "",
        location: "",
        signUpType: "email",
    })
    const [isSubmit, setSubmit] = useState(false)


    const handleFormSubmit = e => {
        e.preventDefault();

         const errorData = validate(data);
         setError(errorData)
        // setSubmit(true)
        console.log(data);
        console.log(errorData);
        console.log(error);
        console.log(setError);     
    }



    // useEffect(()=>{
    //     if(Object.keys(error).length === 0 && 
    //     isSubmit) {
    //         callback();
    //     }
    // }, [error])}
    return {data, handleFormSubmit, error,setData }
}
export default useForm;

