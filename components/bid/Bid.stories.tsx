import { Bid as BidComponent } from '../../components';
import fromImgToUrl from '../../__mocks__/fromImgToUrl';
import type { BidProps } from './Bid';

const story = {
  title: 'Components/bid/Bid',
  component: BidComponent,
};

export const Bid = (args: BidProps) => <BidComponent {...args} />;

const args: BidProps = {
  firstName: 'David',
  lastName: 'Giorgadze',
  details: '2 hours ago',
  image: fromImgToUrl(),
  bidAmount: 200,
};
Bid.args = args;

export default story;
