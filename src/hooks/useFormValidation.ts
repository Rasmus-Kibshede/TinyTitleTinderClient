import { useState } from "react";
import validator from "validator";

/**
 * Custom hook for form validation
 * @returns emailError, setEmailError, passwordError, setPasswordError, email, setEmail, password, setPassword, formValid, setFormValid, open, setOpen, handleClose, handleSubmit, validateEmail, validatePassword
 */
const useFormValidation = () => {
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
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
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
    }, 6000);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  /**
   * Validates that email is a valid email address
   * @param email email to validate
   * @returns boolean
   */
  const validateEmail = (email: string) => {
    return validator.isEmail(email);
  };

  /**
   * Validates that password is a strong password based on the following criteria:
   * - At least 8 characters
   * - At least 1 lowercase letter
   * - At least 1 uppercase letter
   * - At least 1 number
   * - At least 1 symbol
   * @param password password to validate
   * @returns boolean 
   */
  const validatePassword = (password: string) => {
    return validator.isStrongPassword(password);
  };

  return {
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
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
    validateEmail,
    validatePassword,
  };
};

export default useFormValidation;
