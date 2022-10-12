import { Input as InputComponent, Button } from '../../../components';
import { Container } from '../../../components/layouts';
import type { IInput } from '../../../components/form/Input';

export default {
  title: 'Components/Form',
  component: InputComponent,
};

export const Input = (args: IInput) => (
  <Container padding="SOLID" color="BLACK">
    <InputComponent icon={args.icon} placeholder={args.placeholder}>
      <Button value="Find" onClick={() => {}} size="SMALL" />
    </InputComponent>
  </Container>
);

const args: IInput = {
  icon: 'SEARCH',
  placeholder: 'Search',
};
Input.args = args;
