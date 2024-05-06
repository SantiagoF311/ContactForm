// hooks.js
import { useState, useEffect } from 'react';

export const useTry = () => {
  const [response, setResponse] = useState(null);
  const [message, setMessage] = useState(null);

  const handleResponse = async () => {
  try {
    if (response !== null) {
      if (response.success) {
        setMessage({ type: 'success', text: response.message });
      } else {
        if (response.statusCode === 409) {
          setMessage({ type: 'error', text: 'Mail en uso' });
        } else if (response.statusCode === 410) {
          setMessage({ type: 'error', text: 'Ya existe un usuario con ese nombre' });
        } else if (response.statusCode === 400) {
          setMessage({ type: 'error', text: 'Rellena todos los campos correctamente' });
        } else if (response.statusCode === 401) {
          setMessage({ type: 'error', text: 'Una o ambas credenciales son incorrectas' });
        } else {
          setMessage({ type: 'error', text: response.message });
        }
      }
    }
  } catch (err) {
    console.error('Error during registration:', err);
    setMessage({ type: 'error', text: 'Something went wrong' });
  }
};


  useEffect(() => {
      handleResponse();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  return { setResponse, message };
};
