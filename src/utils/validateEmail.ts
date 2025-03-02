export const validateEmail = (form: {
    email: string;
}) => {
    const errors: Record<string, string> = {};

    if (!form.email.trim()) errors.email = 'Email is required.';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) errors.email = 'Enter a valid email.';

    return { isValid: Object.keys(errors).length === 0, errors };
};