import { ChangeEventHandler, useEffect, useRef } from 'react';

interface InputProps {
  name:
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'confirmEmail'
    | 'password'
    | 'confirmPassword'
    | 'listingTitle'
    | 'listingDescription'
    | 'startingPrice';
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  focus: 'on' | 'off';
}

const typesMap: Record<InputProps['name'], 'text' | 'email' | 'password'> = {
  firstName: 'text',
  lastName: 'text',
  email: 'email',
  confirmEmail: 'email',
  password: 'password',
  confirmPassword: 'password',
  listingTitle: 'text',
  listingDescription: 'text',
  startingPrice: 'text',
};

const placeholdersMap: Record<
  InputProps['name'],
  | 'Enter your first name'
  | 'Enter your last name'
  | 'Enter your email'
  | 'Confirm your email'
  | 'Enter your password'
  | 'Confirm your password'
  | 'Enter listing title'
  | 'Enter listing description'
  | 'Enter starting price'
> = {
  firstName: 'Enter your first name',
  lastName: 'Enter your last name',
  email: 'Enter your email',
  confirmEmail: 'Confirm your email',
  password: 'Enter your password',
  confirmPassword: 'Confirm your password',
  listingTitle: 'Enter listing title',
  listingDescription: 'Enter listing description',
  startingPrice: 'Enter starting price',
};

const Input = (props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    props.focus === 'on' && ref.current?.focus();
  }, [props.focus]);

  return (
    <input
      {...props}
      ref={ref}
      autoComplete="off"
      type={typesMap[props.name]}
      placeholder={placeholdersMap[props.name]}
      className="p-2 outline-blue-600 bg-gray-200 text-center text-lg rounded-lg"
    />
  );
};

export default Input;
