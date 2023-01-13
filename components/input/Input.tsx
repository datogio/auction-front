import { ChangeEventHandler, useEffect, useRef } from 'react';
import { BiUpload } from 'react-icons/bi';

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
    | 'startingPrice'
    | 'image';
  value?: any;
  imagename?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  focus: 'on' | 'off';
}

const typesMap: Record<
  InputProps['name'],
  'text' | 'email' | 'password' | 'file'
> = {
  firstName: 'text',
  lastName: 'text',
  email: 'email',
  confirmEmail: 'email',
  password: 'password',
  confirmPassword: 'password',
  listingTitle: 'text',
  listingDescription: 'text',
  startingPrice: 'text',
  image: 'file',
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
  | 'Upload listing image'
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
  image: 'Upload listing image',
};

const Input = (props: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    props.focus === 'on' && ref.current?.focus();
  }, [props.focus]);

  return (
    <div className="w-[100%]">
      {props.name === 'image' && (
        <label htmlFor="upload" className="button cursor-pointer">
          <BiUpload />
          <div>{props.imagename}</div>
        </label>
      )}
      <input
        {...props}
        ref={ref}
        autoComplete="off"
        type={typesMap[props.name]}
        placeholder={placeholdersMap[props.name]}
        id={`${props.name === 'image' && 'upload'}`}
        className={`${
          props.name === 'image' && 'hidden'
        } p-2 outline-blue-600 bg-gray-200 text-center text-lg rounded-lg w-[100%]`}
      />
    </div>
  );
};

export default Input;
