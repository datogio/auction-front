import { CategoryTag as CategoryTagComponent } from '../../components';
import type { CategoryTagProps } from '../../components/category/CategoryTag';

export default {
  title: 'Components/CategoryTag',
  component: CategoryTagComponent,
};

export const CategoryTag = (args: CategoryTagProps) => (
  <CategoryTagComponent {...args} />
);

const args: CategoryTagProps = {
  active: false,
  title: 'Category Tag',
};

CategoryTag.args = args;
