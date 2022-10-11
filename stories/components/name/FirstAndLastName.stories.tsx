import {
  FirstAndLastName as FirstAndLastNameComponent,
  Name,
} from '../../../components';
import type { IAvatar } from '../../../components/avatar/Avatar';

export default {
  title: 'Components/Name',
  component: FirstAndLastNameComponent,
};

const firstAndLastNameArgs: {
  firstName: IAvatar['firstName'];
  lastName: IAvatar['lastName'];
} = {
  firstName: 'David',
  lastName: 'Giorgadze',
};

export const FirstAndLastName = () => (
  <FirstAndLastNameComponent>
    <Name name={firstAndLastNameArgs.firstName} />
    <Name name={firstAndLastNameArgs.lastName} />
  </FirstAndLastNameComponent>
);
