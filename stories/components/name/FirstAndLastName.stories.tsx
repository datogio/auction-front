import { FirstAndLastName as FirstAndLastNameComponent } from '../../../components';
import type { IFirstAndLastName } from '../../../components/name/FirstAndLastName';

export default {
  title: 'Components/Name',
  component: FirstAndLastNameComponent,
};

export const FirstAndLastName = (args: IFirstAndLastName) => (
  <FirstAndLastNameComponent
    firstName={args.firstName}
    lastName={args.lastName}
  />
);

FirstAndLastName.args = { firstName: 'David', lastName: 'Giorgadze' };
