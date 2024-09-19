import { useState } from 'react';

export const useForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const resetForm = () => {
    setFormData(initialState);
    setLoading(false);
    setError(null);
    setSuccess(false);
  };

  return {
    formData,
    loading,
    error,
    success,
    handleInputChange,
    resetForm,
    setLoading,
    setError,
    setSuccess,
  };
};