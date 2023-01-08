import { PromptItem as PromptItemComponent } from '..';
import type { PromptItemProps } from './PromptItem';
import { Provider } from 'react-redux';
import { store } from '../../store';

const story = {
  title: 'Components/prompt/PromptItem',
  component: PromptItemComponent,
};

export const PromptItem = (args: PromptItemProps) => (
  <Provider store={store}>
    <PromptItemComponent {...args} />
  </Provider>
);

const args: PromptItemProps = {
  id: 1,
  type: 'error',
  message: 'Prompt message',
};

PromptItem.args = args;

export default story;
