import { ReactNode } from 'react';

interface ListingDetailsItemProps {
  type: 'starting price' | 'time left' | 'current price';
  value?: string;
  children?: ReactNode;
}

const titlesMap: Record<ListingDetailsItemProps['type'], string> = {
  'starting price': 'STARTING PRICE',
  'current price': 'CURRENT PRICE',
  'time left': 'TIME LEFT',
};

const ListingDetailsItem = (props: ListingDetailsItemProps) => {
  return (
    <div className="col-span-1 space-y-1">
      <div className="text-xs text-gray-600">{titlesMap[props.type]}</div>
      <div className="text-xl font-bold">{props.value || props.children}</div>
    </div>
  );
};

export default ListingDetailsItem;
