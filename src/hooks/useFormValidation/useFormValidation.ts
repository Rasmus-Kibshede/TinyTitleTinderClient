import { useState } from "react";

/**
 * Custom hook for form validation
 * @returns emailError, setEmailError, passwordError, setPasswordError, email, setEmail, password, setPassword, formValid, setFormValid, open, setOpen, handleClose, handleSubmit, validateEmail, validatePassword
 */
const useFormValidation = () => {
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formValid, setFormValid] = useState(false);
  const [open, setOpen] = useState(false);

  /**
   * Handle form submit
   * @param event form event to prevent default behavior
   */
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate email and password is not empty and has correct format
    if (usernameError || emailError || passwordError || !username || !email || !password) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
    // Open snackbar on submit
    setOpen(true);
    // Close snackbar after 6 seconds
    setTimeout(() => {
      setOpen(false);
    }, 6000);
  };

  /**
   * Closes snackbar
   */
  const handleClose = (): void => {
    setOpen(false);
  };

  const validateUsername = (username: string) => {
    return username.length >= 8;
  };

  /**
   * Validates email format. Includes double use of @
   * @param email email address to validate
   * @returns boolean
   */
  const validateEmail = (email: string) => {
    // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };


  // TODO: Add more password validation
  /**
   * Validates that password has at least 8 characters
   * @param password password to validate
   * @returns boolean
   */
  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  return {
    usernameError,
    setUsernameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    formValid,
    setFormValid,
    open,
    setOpen,
    handleClose,
    handleSubmit,
    validateUsername,
    validateEmail,
    validatePassword,
  };
};

export default useFormValidation;