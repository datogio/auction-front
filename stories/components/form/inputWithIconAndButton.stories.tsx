import { Input, Button } from '../../../components';
import { Container } from '../../../components/layouts';
import type { IInput } from '../../../components/form/Input';

export default {
  title: 'Components/Form',
  component: Input,
};

export const InputWithIconAndButton = (args: IInput) => (
  <Container color="BLACK" padding="SOLID">
    <Input icon="SEARCH" placeholder="Search">
      <Button value="Find" size="SMALL" onClick={() => {}} />
    </Input>
  </Container>
);
