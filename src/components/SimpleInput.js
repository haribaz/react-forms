import { useState } from 'react'

const SimpleInput = (props) => {
    const [name, setName] = useState('')
    const [nameInputTouched, setNameInputTouched] = useState(false)
    const [email, setEmail] = useState('')
    const [emailInputTouched, setEmailInputTouched] = useState(false)

    const nameIsValid = name.trim() !== ''
    const nameCombinedInvalidity = !nameIsValid && nameInputTouched

    const emailIsValid = email.includes('@')
    const emailCombinedInvalidity = !emailIsValid && emailInputTouched

    let isFormValid = false
    if (nameIsValid && emailIsValid) {
        isFormValid = true
    }

    const nameInputChangeHandler = (e) => {
        setName(e.target.value)
    }
    const emailInputChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const nameInputBlurHandler = (e) => {
        setNameInputTouched(true)
    }

    const emailInputBlurHandler = (e) => {
        setEmailInputTouched(true)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        setNameInputTouched(true)
        setEmailInputTouched(true)

        if (nameCombinedInvalidity) {
            return
        }

        console.log(name)
        setName('')
        setNameInputTouched(false)

        setEmail('')
        setEmailInputTouched(false)
    }

    const nameInputClasses = nameCombinedInvalidity ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailCombinedInvalidity ? 'form-control invalid' : 'form-control'
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={name}
                />
            </div>

            <div className={emailInputClasses}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="text"
                    id="email"
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    value={email}
                />
            </div>
            {nameCombinedInvalidity && <p>Please enter a valid name</p>}
            {emailCombinedInvalidity && <p>Please enter a valid email</p>}
            <div className="form-actions">
                <button disabled={!isFormValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput
