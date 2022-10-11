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
      className={`${PADDING_MAPS[padding]} bg-[#191A1D] text-white rounded-2xl`}
    >
      {children}
    </div>
  );
};

export default Container;
