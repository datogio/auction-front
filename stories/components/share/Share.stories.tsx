import { Share as ShareComponent, AvatarWithName } from '../../../components';

export default {
  title: 'Components/Share',
  component: ShareComponent,
};

export const Share = () => (
  <ShareComponent>
    <AvatarWithName firstName="David" lastName="Giorgadze" size="SMALL" />
    <AvatarWithName firstName="David" lastName="Giorgadze" size="SMALL" />
    <AvatarWithName firstName="David" lastName="Giorgadze" size="SMALL" />
    <AvatarWithName firstName="David" lastName="Giorgadze" size="SMALL" />
    <AvatarWithName firstName="David" lastName="Giorgadze" size="SMALL" />
    <AvatarWithName firstName="David" lastName="Giorgadze" size="SMALL" />
    <AvatarWithName firstName="David" lastName="Giorgadze" size="SMALL" />
  </ShareComponent>
);
