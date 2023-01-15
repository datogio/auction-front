import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  useState,
  useEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button } from '../../components';
import * as userActions from '../../store/user';
import * as bidAcitons from '../../store/bid';
import * as promptActions from '../../store/prompt';
import { RootState } from '../../store';

export interface AuctionControllsProps {
  listingId: string;
  initialBidAmount: string;
}

const AuctionControlls = (props: AuctionControllsProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const topBid = useSelector((state: RootState) =>
    bidAcitons.selectListingsTopBid(state, props.listingId)
  );
  const [inputValue, setInputValue] = useState<string>(
    topBid ? topBid.amount.toString() : props.initialBidAmount
  );

  useEffect(() => {
    topBid
      ? setInputValue((topBid.amount + 1).toString())
      : setInputValue((parseInt(props.initialBidAmount) + 1).toString());
  }, [topBid, props.initialBidAmount]);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputValue(event.target.value);
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputValue)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Bid amount is required',
        })
      );
    if (!user)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Sign in to place bid',
        })
      );
    if (topBid) {
      if (parseInt(inputValue) <= topBid.amount) {
        return dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'error',
            message: `Place at least $${topBid.amount + 1} bid`,
          })
        );
      }
    }
    if (!topBid) {
      if (parseInt(inputValue) <= parseInt(props.initialBidAmount)) {
        return dispatch(
          promptActions.add({
            id: Math.random(),
            type: 'error',
            message: `Place at least $${
              parseInt(props.initialBidAmount) + 1
            } bid`,
          })
        );
      }
    }
    if (topBid && topBid.bidder._id === user?.id) {
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Your bid is winning',
        })
      );
    }
    dispatch(
      bidAcitons.createBid({
        amount: parseInt(inputValue),
        bidder: user,
        listingId: props.listingId,
      })
    );
  };

  const getButtonValue = () => {
    if (topBid && topBid.bidder._id === user?.id) {
      return 'Winning Bid';
    }

    return 'Place Bid';
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
      <Button icon="none" value={getButtonValue()} onClick={onButtonClick} />
    </div>
  );
};

export default AuctionControlls;
