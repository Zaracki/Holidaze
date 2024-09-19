import React from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import InputField from '../../components/InputField';
import FormLayout from '../../components/FormLayout';
import { useForm } from '../../components/hooks/useForm';
import { useHttp } from '../../components/hooks/useHttp';
import { API_URL_LOGIN } from '../../common/Constants';
import { saveUserData } from '../../utils/LocalStorage';

export const Login = () => {
  const { formData, handleInputChange } = useForm({
    email: '',
    password: '',
  });

  const { sendRequest, loading, error, success, data } = useHttp();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest(API_URL_LOGIN, 'POST', formData);
  };

  React.useEffect(() => {
    if (success && data) {
      saveUserData(data.data);
    }
  }, [success, data]);

  return (
    <FormLayout title="Sign in">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <InputField
          label="Your Email"
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
        <PrimaryButton className="w-full" type="submit" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in'}
        </PrimaryButton>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {success && <p className="text-green-500 mt-4">Login successful!</p>}
      </form>
    </FormLayout>
  );
};

export default Login;
