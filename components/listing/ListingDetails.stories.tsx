import { ListingDetails as ListingDetailsComponent } from '../../components';
import type { ListingDetailsProps } from './ListingDetails';

const story = {
  title: 'Components/listing/ListingDetails',
  component: ListingDetailsComponent,
};

export const ListingDetails = (args: ListingDetailsProps) => (
  <ListingDetailsComponent {...args} />
);

const args: ListingDetailsProps = {
  startingPrice: '200',
};

ListingDetails.args = args;

export default story;
