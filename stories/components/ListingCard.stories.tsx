import { ListinCard as ListingCardComponent } from '../../components';
import type { ListingCardProps } from '../../components/listing/ListingCard';
import fromImgToUrl from '../../__mocks__/fromImgToUrl';

export default {
  title: 'Components/ListingCard',
  component: ListingCardComponent,
};

export const ListingCard = (args: ListingCardProps) => (
  <div className="grid grid-cols-4 gap-5 bg-gray-100 p-2">
    <ListingCardComponent {...args} />
    <ListingCardComponent {...args} />
    <ListingCardComponent {...args} />
    <ListingCardComponent {...args} />
    <ListingCardComponent {...args} />
    <ListingCardComponent {...args} />
  </div>
);

const args: ListingCardProps = {
  href: '/',
  image: fromImgToUrl(),
  title: 'Some Title',
  details: 'some details',
};

ListingCard.args = args;
