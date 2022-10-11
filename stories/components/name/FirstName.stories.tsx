import { FirstName as FirstNameComponent } from '../../../components';
import type { IFirstName } from '../../../components/name/FirstName';

export default {
  title: 'Components/Name',
  component: FirstNameComponent,
};

export const FirstName = (args: IFirstName) => (
  <FirstNameComponent firstName={args.firstName} />
);

FirstName.args = { firstName: 'David' };
