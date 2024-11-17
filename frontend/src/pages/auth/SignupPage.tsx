// component
import { AuthForm, AuthInput } from 'widgets/auth';
// validation
import { signupSchema } from 'entities/auth';

export default function SignupPage() {
  return (
    <section>
      <h1>SIGN UP</h1>
      <AuthForm schema={signupSchema}>
        <AuthInput label='Confirm Password' type='password' placeholder='Password' registerName='confirmPassword' />
        <button type='submit'>Sign up</button>
      </AuthForm>
    </section>
  );
}
