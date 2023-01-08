import { Identity as IdentityComponent } from '..';
import fromImgToUrl from '../../__mocks__/fromImgToUrl';
import type { IdentityProps } from './Identity';

const story = {
  title: 'Components/identity/Identity',
  component: IdentityComponent,
};

export const Identity = (args: IdentityProps) => (
  <div className="w-[50%]">
    <IdentityComponent {...args} />
  </div>
);

const args: IdentityProps = {
  firstName: 'David',
  lastName: 'Giorgadze',
  details: '2 hours ago',
  image: fromImgToUrl(),
};
Identity.args = args;

export default story;
