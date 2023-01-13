import { AuctionControlls as AuctionControllsComponent } from '../../components';
import type { AuctionControllsProps } from './AuctionControlls';

const story = {
  title: 'Components/listing/AuctionControlls',
  component: AuctionControllsComponent,
};

export const AuctionControlls = (args: AuctionControllsProps) => (
  <AuctionControllsComponent {...args} />
);

const args: AuctionControllsProps = {
  listingId: '8123098123',
  initialBidAmount: '200',
};

AuctionControlls.args = args;

export default story;
