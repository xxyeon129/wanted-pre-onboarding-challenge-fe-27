import { apiInstance } from 'shared/user/api/apiInstance';

interface IFetchAuthProps {
  email: string;
  password: string;
}

export const fetchAuth = async ({ email, password }: IFetchAuthProps) => {
  const { data } = await apiInstance.post('/users/create', {
    email,
    password,
  });

  return data;
};
