import { Provider } from 'react-redux';
import { store } from '../../store';
import { AddListing as AddListingComponent } from '../../components';

const story = {
  title: 'Components/listing/AddListing',
  component: AddListingComponent,
};

export const AddListing = () => (
  <Provider store={store}>
    <AddListingComponent />
  </Provider>
);

export default story;
