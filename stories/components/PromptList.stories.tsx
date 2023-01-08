import {
  PromptList as PromptListComponent,
  PromptItem,
} from '../../components';
import type { PromptListProps } from '../../components/prompt/PromptList';

export default {
  title: 'Components/PromptList',
  component: PromptListComponent,
};

export const PromptList = (args: PromptListProps) => (
  <PromptListComponent>
    <PromptItem type="error" message="Test error" id={1} />
    <PromptItem type="notification" message="Test notification" id={2} />
  </PromptListComponent>
);
