import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import InputField from '../../components/InputField';
import FormLayout from '../../components/FormLayout';
import { useForm } from '../../components/hooks/useForm';
import { usePost } from '../../components/hooks/usePost';
import { API_URL_REGISTER } from '../../common/Constants';

export const Register = () => {
  const { formData, handleInputChange } = useForm({
    name: '',
    email: '',
    password: '',
    imageUrl: '',
    venueManager: false,
  });

  const { postData, loading, error, success } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      avatar: {
        url: formData.imageUrl,
        alt: `${formData.name}'s avatar`,
      },
      venueManager: formData.venueManager,
    };

    postData(API_URL_REGISTER, registerData);
  };

  return (
    <FormLayout title="Sign Up">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter your name"
          required
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
          required
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
          required
        />
        <InputField
          label="Image URL"
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleInputChange}
          placeholder="Enter image URL"
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            id="venueManager"
            name="venueManager"
            checked={formData.venueManager}
            onChange={handleInputChange}
            className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="venueManager" className="ml-2 text-white">
            I want to be a venue manager
          </label>
        </div>
        <PrimaryButton className="ml-0 w-full" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create account'}
        </PrimaryButton>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">Registration successful!</p>}
      </form>
    </FormLayout>
  );
};

export default Register;
