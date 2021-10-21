import { useState } from 'react'

const useInput = (validateValue) => {

    const [enterValue, setEnterValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)
    const isValid = validateValue(enterValue)
    const hasError = !isValid && isTouched;

    const valueChangeHandler = (event) => {
        setEnterValue(event.target.value);
    }
    const inputBlurHandler = () => {
        setIsTouched(true)
    }
    const reset=()=>{
setEnterValue('')
setIsTouched(false)
    }


    return {
        enterValue, hasError,  isValid,valueChangeHandler, inputBlurHandler,reset,
    }
}
export default useInput
