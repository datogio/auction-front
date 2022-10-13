import { Header as HeaderComponent } from '../../../components';
import { Container } from '../../../components/layouts';
import type { IHeader } from '../../../components/header/Header';

export default {
  title: 'Components/Header',
  component: HeaderComponent,
};

export const Header = (args: IHeader) => (
  <Container color="BLACK" padding="SOLID">
    <HeaderComponent
      title={args.title}
      icon={args.icon}
      onClick={args.onClick}
    />
  </Container>
);

const headerArgs: IHeader = {
  title: 'Header Title',
  icon: 'CLOSE',
  onClick: () => alert('clicked'),
};
Header.args = headerArgs;
