import { Input, Button } from '../../../components';
import { Container } from '../../../components/layouts';
import type { IInput } from '../../../components/form/Input';

export default {
  title: 'Components/Form',
  component: Input,
};

export const InputWithButton = (args: IInput) => (
  <Container color="BLACK" padding="SOLID">
    <Input
      icon={args.icon}
      value=""
      onChange={() => {}}
      placeholder={args.placeholder}
    >
      <Button value="Find" size="SMALL" onClick={() => {}} />
    </Input>
  </Container>
);

const inputArgs: IInput = {
  icon: 'SEARCH',
  value: '',
  onChange: () => {},
  placeholder: 'Search',
};
InputWithButton.args = inputArgs;
