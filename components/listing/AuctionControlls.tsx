import { ChangeEventHandler, MouseEventHandler, useState } from 'react';
import { Input, Button } from '../../components';

export interface AuctionControllsProps {
  listingId: string;
  initialBidAmount: string;
}

const AuctionControlls = (props: AuctionControllsProps) => {
  const [inputValue, setInputValue] = useState<string>(props.initialBidAmount);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    alert(inputValue);
  };

  return (
    <div className="space-y-3">
      <Input
        icon="dollar"
        name="bidAmount"
        focus="off"
        value={inputValue}
        onChange={onInputChange}
      />
      <Button icon="none" value="Place Bid" onClick={onButtonClick} />
    </div>
  );
};

export default AuctionControlls;
