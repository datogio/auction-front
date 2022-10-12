import { Container as ContainerLayout } from '../../components/layouts';
import type { IContainer } from '../../components/layouts/Container';

export default {
  title: 'Layouts/Container',
  component: ContainerLayout,
};

export const Container = (args: IContainer) => (
  <ContainerLayout color={args.color} padding={args.padding}>
    <ContainerLayout color="GRAY" padding="MEDIUM">
      Container
    </ContainerLayout>
  </ContainerLayout>
);

Container.args = { color: 'BLACK', padding: 'SOLID' };
