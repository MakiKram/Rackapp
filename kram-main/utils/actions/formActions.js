import {
    validateString,
    validateEmail,
    validatePassword
} from '../ValidationConstraints'

export const validateInput = (inputId, inputValue) => {
    if (
        inputId === 'Store ID' || inputId === 'Username'
    ) {
        return validateString(inputId, inputValue)
    } else if (inputId === 'Store ID') {
        return validateEmail(inputId, inputValue)
    } else if (inputId === 'password' || inputId === 'confirmPassword' || inputId === 'currentPassword') {
        return validatePassword(inputId, inputValue)
    }
}