import type { ReactNode } from 'react';

export interface IContainer {
  padding: 'SMALL' | 'MEDIUM' | 'SOLID' | 'NONE';
  children: ReactNode;
}

const PADDING_MAPS: Record<IContainer['padding'], string> = {
  ['SMALL']: 'p-2',
  ['MEDIUM']: 'p-3',
  ['SOLID']: 'p-7',
  ['NONE']: '',
};

const Container = ({ padding, children }: IContainer) => {
  return (
    <div
      className={`${PADDING_MAPS[padding]} flex flex-col items-center bg-[#191A1D] text-white rounded-2xl shadow-lg shadow-[#191A1D]`}
    >
      {children}
    </div>
  );
};

export default Container;
