export const validateLoginForm = (form: { email: string; password: string }) => {
    const errors: Record<string, string> = {};
  
    if (!form.email.trim()) errors.email = 'Email is required.';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email))
      errors.email = 'Enter a valid email.';
    
    if (!form.password.trim()) errors.password = 'Password is required.';
    else if (form.password.length < 6)
      errors.password = 'Password must be at least 6 characters.';
  
    return { isValid: Object.keys(errors).length === 0, errors };
  };