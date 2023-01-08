import { PromptList as PromptListComponent, PromptItem } from '..';
import type { PromptListProps } from './PromptList';
import { Provider } from 'react-redux';
import { store } from '../../store';

const story = {
  title: 'Components/prompt/PromptList',
  component: PromptListComponent,
};

export const PromptList = (args: PromptListProps) => (
  <Provider store={store}>
    <PromptListComponent {...args}>
      <PromptItem type="error" message="Test error" id={1} />
      <PromptItem type="notification" message="Test notification" id={2} />
    </PromptListComponent>
  </Provider>
);

export default story;
