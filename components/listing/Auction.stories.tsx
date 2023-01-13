import { Auction as AuctionComponent } from '../../components';
import fromImgToUrl from '../../__mocks__/fromImgToUrl';
import type { AuctionProps } from './Auction';

const story = {
  title: 'Components/listing/Auction',
  component: AuctionComponent,
};

export const Auction = (args: AuctionProps) => <AuctionComponent {...args} />;

const args: AuctionProps = {
  listingId: '123',
  image: fromImgToUrl(),
  initialBidAmount: '150',
};

Auction.args = args;

export default story;
