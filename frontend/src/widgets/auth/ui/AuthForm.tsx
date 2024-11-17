import { ZodEffects, ZodObject, ZodTypeAny } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ReactNode } from 'react';
// components
import { AuthInput } from './AuthInput';
// validation
import { TAuthForm, useAuthMutation } from 'entities/auth';

interface IAuthFormProps {
  schema: ZodEffects<ZodObject<{ [key: string]: ZodTypeAny }>>;
  children: ReactNode;
}

export function AuthForm({ schema, children }: IAuthFormProps) {
  const { handleSubmit } = useForm<TAuthForm>({
    resolver: zodResolver(schema),
  });

  const handleAuth = (data: TAuthForm) => {
    const authMutation = useAuthMutation();
    authMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(handleAuth)}>
      <AuthInput label='Email' type='email' placeholder='user@gmail.com' />
      <AuthInput label='Password' type='password' placeholder='Password' />
      {children}
    </form>
  );
}
