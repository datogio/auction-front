import type { ReactNode } from 'react';

export interface IContainer {
  color: 'BLACK' | 'GRAY';
  padding: 'SMALL' | 'MEDIUM' | 'SOLID' | 'NONE';
  children: ReactNode;
}

const PADDING_MAPS: Record<IContainer['padding'], string> = {
  ['SMALL']: 'p-2',
  ['MEDIUM']: 'p-3',
  ['SOLID']: 'p-7',
  ['NONE']: '',
};

const COLOR_MAPS: Record<IContainer['color'], string> = {
  ['BLACK']: 'bg-[#191A1D]',
  ['GRAY']: 'bg-gray-700',
};

const Container = ({ color, padding, children }: IContainer) => {
  return (
    <div
      className={`${PADDING_MAPS[padding]} ${COLOR_MAPS[color]} w-[100%] flex flex-col items-center text-white rounded-2xl shadow-lg shadow-[#191A1D]`}
    >
      {children}
    </div>
  );
};

export default Container;
