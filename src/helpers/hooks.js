import { useState } from 'react'

// Custom Hooks for Forms 
export const useForm = (callback, initialState = {}, validate) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState(initialState)


    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (Object.keys(validate(values)).length !== 0) {
            setErrors(validate(values));
        }
        else {
            callback();
            setErrors(initialState);
        }

    }

    return {
        values,
        errors,
        onChange,
        onSubmit
    }
}