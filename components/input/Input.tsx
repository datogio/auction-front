import { ChangeEventHandler } from 'react';

interface InputProps {
  name:
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'confirmEmail'
    | 'password'
    | 'confirmPassword';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const typesMap: Record<InputProps['name'], 'text' | 'email' | 'password'> = {
  firstName: 'text',
  lastName: 'text',
  email: 'email',
  confirmEmail: 'email',
  password: 'password',
  confirmPassword: 'password',
};

const placeholdersMap: Record<
  InputProps['name'],
  | 'Enter your first name'
  | 'Enter your last name'
  | 'Enter your email'
  | 'Confirm your email'
  | 'Enter your password'
  | 'Confirm your password'
> = {
  firstName: 'Enter your first name',
  lastName: 'Enter your last name',
  email: 'Enter your email',
  confirmEmail: 'Confirm your email',
  password: 'Enter your password',
  confirmPassword: 'Confirm your password',
};

const Input = (props: InputProps) => {
  return (
    <input
      autoComplete="off"
      type={typesMap[props.name]}
      placeholder={placeholdersMap[props.name]}
      {...props}
    />
  );
};

export default Input;
