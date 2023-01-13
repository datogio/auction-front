import { ListingDescription as ListingDescriptioinComponent } from '../../components';
import type { ListingDescriptionProps } from './ListingDescription';

const story = {
  title: 'Components/listing/ListingDescription',
  component: ListingDescriptioinComponent,
};

export const ListingDescription = (args: ListingDescriptionProps) => (
  <ListingDescriptioinComponent {...args} />
);

const args: ListingDescriptionProps = {
  description: 'Listing description',
};

ListingDescription.args = args;

export default story;
