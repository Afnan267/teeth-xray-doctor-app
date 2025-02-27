// export interface ValidationErrors {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
//     terms: string;
// }
// export interface FormData {
//     firstName: string;
//     lastName: string;
//     email: string;
//     password: string;
// }
// export const validateForm = (form: FormData, isSelected: boolean): ValidationErrors => {
//     let errors: ValidationErrors = {
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         terms: '',
//     };

//     if (!form.firstName.trim()) {
//         errors.firstName = 'First name is required.';
//     }
//     if (!form.lastName.trim()) {
//         errors.lastName = 'Last name is required.';
//     }
//     if (!form.email.trim()) {
//         errors.email = 'Email is required.';
//     } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
//         errors.email = 'Enter a valid email.';
//     }
//     if (!form.password.trim()) {
//         errors.password = 'Password is required.';
//     } else if (form.password.length < 6) {
//         errors.password = 'Password must be at least 6 characters.';
//     }
//     if (!isSelected) {
//         errors.terms = 'You must accept the Terms & Conditions.';
//     }

//     return errors;
// };

export const validateForm = (form: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }, isSelected: boolean) => {
    const errors: Record<string, string> = {};
  
    if (!form.firstName.trim()) errors.firstName = 'First name is required.';
    if (!form.lastName.trim()) errors.lastName = 'Last name is required.';
    if (!form.email.trim()) errors.email = 'Email is required.';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) errors.email = 'Enter a valid email.';
    if (!form.password.trim()) errors.password = 'Password is required.';
    else if (form.password.length < 6) errors.password = 'Password must be at least 6 characters.';
    if (!isSelected) errors.terms = 'You must accept the Terms & Conditions.';
  
    return {isValid: Object.keys(errors).length === 0, errors};
  };