import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [formValues, setFormValues] = useState(initialState)

    const handleInputChange = ({target}) =>{
        const {name, type, value, checked} = target
        setFormValues({
            ...formValues,
            [name] : type === "checkbox" ? checked : value
        })
    }

    const reset = ()=>{
        setFormValues(initialState)
    }
    return {
       formValues,
       setFormValues,
       handleInputChange,
       reset
    };
};
