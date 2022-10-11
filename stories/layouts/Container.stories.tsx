import { Container as ContainerLayout } from '../../components/layouts';
import type { IContainer } from '../../components/layouts/Container';

export default {
  title: 'Layouts/Container',
  component: ContainerLayout,
};

export const Container = (args: IContainer) => (
  <ContainerLayout padding={args.padding}>Container</ContainerLayout>
);

Container.args = { padding: 'SOLID' };
