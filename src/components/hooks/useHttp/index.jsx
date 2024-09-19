import { useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState(null);

  const sendRequest = async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const responseData = await response.json();
      setData(responseData);
      setSuccess(true);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return { sendRequest, loading, error, success, data };
};
