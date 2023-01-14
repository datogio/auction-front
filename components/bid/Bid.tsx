import { Identity } from '../identity/Identity.stories';

export interface BidProps {
  firstName: string;
  lastName: string;
  details: string;
  image: string;
  bidAmount: number;
}

const Bid = (props: BidProps) => {
  return (
    <div className="flex items-center justify-between">
      <Identity
        firstName={props.firstName}
        lastName={props.lastName}
        details={props.details}
        image={props.image}
      />
      <div className="flex items-center space-x-1">
        <div>$</div>
        <div className="font-bold">{props.bidAmount}</div>
      </div>
    </div>
  );
};

export default Bid;
