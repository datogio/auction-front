import { Identity as IdentityComponent } from '../../components';
import fromImgToUrl from '../../__mocks__/fromImgToUrl';
import type { IdentityProps } from '../../components/identity/Identity';

export default {
  title: 'Components/Identity',
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
