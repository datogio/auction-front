import { Name as FirstNameComponent } from '../../../components';
import type { IName } from '../../../components/Name';

export default {
  title: 'Components/Name',
  component: FirstNameComponent,
};

export const Name = (args: IName) => <FirstNameComponent name={args.name} />;

Name.args = { name: 'David' };
