import { Input, Button } from '../../../components';
import { Container } from '../../../components/layouts';
import type { IInput } from '../../../components/form/Input';

export default {
  title: 'Components/Form',
  component: Input,
};

export const InputWithButton = (args: IInput) => (
  <Container color="BLACK" padding="SOLID">
    <Input icon={args.icon} placeholder={args.placeholder}>
      <Button value="Find" size="SMALL" onClick={() => {}} />
    </Input>
  </Container>
);

InputWithButton.args = { icon: 'SEARCH', placeholder: 'Search' };
