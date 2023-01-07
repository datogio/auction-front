import { PromptItem as PromptItemComponent } from '../../components';
import type { PromptItemProps } from '../../components/prompt/PromptItem';

export default {
  title: 'Components/PromptItem',
  component: PromptItemComponent,
};

export const PromptItem = (args: PromptItemProps) => (
  <PromptItemComponent {...args} />
);

const args: PromptItemProps = {
  type: 'error',
  message: 'Prompt message',
  index: 1,
};

PromptItem.args = args;
