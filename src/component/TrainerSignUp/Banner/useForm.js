import { useState, useEffect} from 'react';

const useForm = (validate, callback) => {
    // const [aboutTrainerData, setAboutTrainerData] = useState({
    //     name:"",
    //     location: "",
    //     dob: "",
    //     email: "",
    //     gender: "",
    //     phone: "",
    //     websiteURL: "",
    //     instagram: "",
    // });


   
    const [data, setData] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        password: "",
        cpassword: "",
        signUpType: "email",
    });
    

    // trainer background

    // const [currentExperiencee, setCurrentExperiencee] = useState({
    //     workMode: "",
    //     workLocation: "",
    // });
    

    // const [trainerbackgroundData, setTrainerbackgroundData] = useState({
    //     areaOfExpertise: "",
    //     previousExperience: [],
    //     certification: [],
    //     clientAssessment: "",
    //     trainingProcess: "",
    //     interestInMotto: "",
    //     currentExperience: "",
    // });

    // const [inputFields, setInputField] = useState([
    //     {
    //         orgnization: "",
    //         job: "",
    //         years: "",
    //     },
    // ]);

    // const [inputCertificatesFields, setinputCertificatesField] = useState([
    //     {
    //         certificate: "",
    //         year: "",
    //         upload: "",
    //     },
    // ]);

    // trainer background end


    // trainer avaialability

    // const [trainerAvailabilityData, setTrainerAvailabilityData ] = useState({
    //     hoursPerWeek: "",
    //     preferedTrainingMode: "Virtual",
    //     trainingFacilityLocation: "",
    //     willingToTravel: "0",
    //     servicableLocation: "",
    // });

    const [error, setError] = useState({
        name:"",
        email:"",
        phoneNumber:"",
        password:"",
        cpassword:""
    })
    const [isSubmit, setSubmit] = useState(false)

    // const handleChange = e => {
    //     const { name, value} = e.target
    //     setAboutTrainerData({
    //         ...aboutTrainerData,
    //         [name]:value
    //     })
    // }
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

    // const handleTrainerBackgroundData = e => {
    //     e.preventDefault();
    //     setError(validate(trainerbackgroundData))
    //     setSubmit(true)
    // }

    // const handleTrainerAvailability = e => {
    //     e.preventDefault();
    //     setError(validate(trainerAvailabilityData))
    //     setSubmit(true)
    // }

// trainer background

    // const handleChangeInput = (index, event) => {
    //     const values = [...inputFields];
    //     values[index][event.target.name] = event.target.value;
    //     setInputField(values);

    //     console.log(inputFields);

    //     setTrainerbackgroundData({
    //         ...trainerbackgroundData,
    //         previousExperience: inputFields,
    //     });
    // };

    // const handleAddCertificateFields = () => {
    //     setinputCertificatesField([
    //         ...inputCertificatesFields,
    //         { certificate: "", year: "", upload: "" },
    //     ]);

    //     console.log(inputCertificatesFields);
    // };

    // const handleChangeCertificateInput = (index, event) => {
    //     const values = [...inputCertificatesFields];
    //     values[index][event.target.name] = event.target.value;
    //     setinputCertificatesField(values);

    //     // console.log(inputCertificatesFields);
    //     setTrainerbackgroundData({
    //         ...trainerbackgroundData,
    //         certification: inputCertificatesFields,
    //     });
    // };

    
    // const handleChangeExperience = (e) => {
    //     setCurrentExperiencee({
    //         ...currentExperiencee,
    //         workMode:
    //             e.target.value,
    //     });

        
    // const handleAddFields = () => {
    //     setInputField([
    //         ...inputFields,
    //         { orgnization: "", job: "", years: "" },
    //     ]);
    // };

    // trainer background


    // useEffect(()=>{
    //     if(Object.keys(error).length === 0 && 
    //     isSubmit) {
    //         callback();
    //     }
    // }, [error])}
    return {data, handleFormSubmit, error,setData }
}
export default useForm;

