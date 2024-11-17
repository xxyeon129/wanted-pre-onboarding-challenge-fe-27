import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
// validation
import { signupSchema, TAuthForm } from 'entities/auth';

interface IAuthInputProps {
  label: string;
  type: keyof TAuthForm;
  placeholder: string;
  registerName?: keyof TAuthForm;
}

export function AuthInput({ label, type, placeholder, registerName }: IAuthInputProps) {
  const {
    register,
    formState: { errors },
  } = useForm<TAuthForm>({
    resolver: zodResolver(signupSchema),
  });

  const inputName = registerName || type;

  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(inputName)} placeholder={placeholder} />
      {errors[inputName] && <p role='alert'>{errors[inputName]?.message}</p>}
    </div>
  );
}
