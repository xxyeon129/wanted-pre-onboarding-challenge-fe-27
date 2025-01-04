import { FieldErrors, UseFormRegister } from 'react-hook-form';

// types
import { TAuthForm } from 'entities/auth';

interface IAuthInputProps {
  label: string;
  type: keyof TAuthForm;
  placeholder: string;
  registerName: keyof TAuthForm;
  register: UseFormRegister<TAuthForm>;
  errors: FieldErrors<TAuthForm>;
}

export function AuthInput({ label, type, placeholder, registerName, register, errors }: IAuthInputProps) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} {...register(registerName)} placeholder={placeholder} aria-invalid={!!errors[registerName]} />
      {errors[registerName] && <p role='alert'>{errors[registerName]?.message}</p>}
    </div>
  );
}
