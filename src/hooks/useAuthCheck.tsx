import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuthCheck = (setAuthenticated: (value: boolean) => void) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      navigate('/login');
    }
  }, [navigate, setAuthenticated]);

  return;
};

export default useAuthCheck;
