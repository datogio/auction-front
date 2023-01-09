import { IdentityDetails as IdentityDetailsComponent } from '../../components';
import type { IdentityDetailsProps } from './IdentityDetails';

const story = {
  title: 'Components/identity/IdentityDetails',
  component: IdentityDetailsComponent,
};

export const Identity = (args: IdentityDetailsProps) => (
  <IdentityDetailsComponent {...args} />
);

const args: IdentityDetailsProps = {
  size: 'md',
  headline: 'Test Headline',
  details: 'Test Details',
};

Identity.args = args;

export default story;
