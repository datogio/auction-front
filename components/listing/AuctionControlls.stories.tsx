import { Provider } from 'react-redux';
import { store } from '../../store';
import { AuctionControlls as AuctionControllsComponent } from '../../components';
import type { AuctionControllsProps } from './AuctionControlls';

const story = {
  title: 'Components/listing/AuctionControlls',
  component: AuctionControllsComponent,
};

export const AuctionControlls = (args: AuctionControllsProps) => (
  <Provider store={store}>
    <AuctionControllsComponent {...args} />
  </Provider>
);

const args: AuctionControllsProps = {
  listingId: '8123098123',
  initialBidAmount: '200',
};

AuctionControlls.args = args;

export default story;
