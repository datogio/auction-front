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
      titleIcon={args.titleIcon}
      onIconClick={args.onIconClick}
    />
  </Container>
);

const headerArgs: IHeader = {
  title: 'Header Title (supports svg)',
  titleIcon: 'DOTS',
  onIconClick: () => alert('clicked'),
};
Header.args = headerArgs;
