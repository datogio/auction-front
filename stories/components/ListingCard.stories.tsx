import { ListinCard as ListingCardComponent } from '../../components';
import type { ListingCardProps } from '../../components/listing/ListingCard';

export default {
  title: 'Components/ListingCard',
  component: ListingCardComponent,
};

export const ListingCard = (args: ListingCardProps) => (
  <ListingCardComponent {...args} />
);

const args: ListingCardProps = {
  href: '/',
};

ListingCard.args = args;
