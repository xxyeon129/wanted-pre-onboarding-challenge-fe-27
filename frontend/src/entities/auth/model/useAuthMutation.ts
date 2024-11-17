import { useMutation } from '@tanstack/react-query';
import { fetchAuth } from '../api/fetchAuth';
import { USER_TOKEN_KEY } from 'shared/user/consts/user.const';

export const useAuthMutation = () => {
  const authMutation = useMutation({
    mutationFn: fetchAuth,
    onSuccess: (data: { message: string; token: string }) => {
      alert(data.message);
      localStorage.setItem(USER_TOKEN_KEY, data.token);
    },
    onError: (error) => {
      console.log('auth mutation error', error);
    },
  });

  return authMutation;
};
