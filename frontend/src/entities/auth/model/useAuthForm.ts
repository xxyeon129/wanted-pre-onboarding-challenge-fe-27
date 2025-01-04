import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// hooks
import { useAuthMutation } from './useAuthMutation';
// types
import { ZodEffects, ZodObject, ZodTypeAny } from 'zod';
import { TAuthForm } from './authSchema';

export const useAuthForm = (schema: ZodEffects<ZodObject<{ [key: string]: ZodTypeAny }>>) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm<TAuthForm>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  const authMutation = useAuthMutation();

  const handleFormSubmit = (data: TAuthForm) => {
    authMutation.mutate(data);
  };

  return {
    register,
    handleSubmit,
    errors,
    isDirty,
    isValid,
    handleFormSubmit,
  };
};
