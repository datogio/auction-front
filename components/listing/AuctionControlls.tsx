import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '../../components';
import * as userActions from '../../store/user';
import * as bidAcitons from '../../store/bid';

export interface AuctionControllsProps {
  listingId: string;
  initialBidAmount: string;
}

const AuctionControlls = (props: AuctionControllsProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const [inputValue, setInputValue] = useState<string>(props.initialBidAmount);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputValue) return alert('Bid amount is required');
    if (!user) return alert('Unauthorizaed');
    dispatch(
      bidAcitons.createBid({
        amount: parseInt(inputValue),
        bidder: user,
        listingId: props.listingId,
      })
    );
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
