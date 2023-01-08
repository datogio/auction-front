import { useSelector } from 'react-redux';
import { CategoryTag } from '../../components';
import * as categoryActions from '../../store/category';

const Categories = () => {
  const categories = useSelector(categoryActions.selectAllCategories);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Categories</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <CategoryTag key={category._id} title={category.title} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
