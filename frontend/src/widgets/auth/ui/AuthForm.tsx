// components
import { AuthInput } from './AuthInput';
// hooks
import { signupSchema, useAuthForm } from 'entities/auth';

export function AuthForm() {
  const { register, handleSubmit, errors, isDirty, isValid, handleFormSubmit } = useAuthForm(signupSchema);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <AuthInput
        label='Email'
        type='email'
        placeholder='user@gmail.com'
        registerName='email'
        register={register}
        errors={errors}
      />

      <AuthInput
        label='Password'
        type='password'
        placeholder='영문, 숫자, 특수문자 조합 8~15자리 입력'
        registerName='password'
        register={register}
        errors={errors}
      />

      <AuthInput
        label='Confirm Password'
        type='password'
        placeholder='Confirm Password'
        registerName='confirmPassword'
        register={register}
        errors={errors}
      />

      <button type='submit' disabled={!isDirty || !isValid}>
        Sign up
      </button>
    </form>
  );
}
