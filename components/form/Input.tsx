import { FiSearch } from 'react-icons/fi';
import type { ReactNode } from 'react';

export interface IInput {
  icon: 'SEARCH' | 'NONE';
  placeholder: string;
}

const ICON_MAPS: Record<IInput['icon'], ReactNode | null> = {
  ['SEARCH']: <FiSearch className="text-3xl" />,
  ['NONE']: null,
};

const Input = ({ icon, placeholder }: IInput) => {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="flex items-center bg-gray-700 text-white py-3 px-4 rounded-xl space-x-3 w-60"
    >
      {ICON_MAPS[icon]}
      <input
        placeholder={placeholder}
        className="w-[100%] bg-transparent outline-none placeholder-gray-200 text-xl"
      />
    </form>
  );
};

export default Input;
