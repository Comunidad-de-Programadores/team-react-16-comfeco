import { useState, useEffect } from "react";

export function useFormValidation(stateInitial, validate, handleFormSubmit) {
  const [data, saveData] = useState(stateInitial);

  const [errors, showErrors] = useState({});
  const [submitform, onSubmit] = useState(false);

  useEffect(() => {
    if (submitform) {
      const validated = Object.keys(errors).length === 0;

      if (validated) {
        handleFormSubmit();
      }
      onSubmit(false);
    }
    // eslint-disable-next-line
  }, [errors]);

  const handleChange = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(data);
    showErrors(validation);
    onSubmit(true);
  };

  const handleBlur = (e) => {
    const validation = validate(data);
    showErrors({ validation });
  };

  return {
    data,
    errors,
    submitform,
    handleChange,
    handleSubmit,
    handleBlur,
  };
}
