import { useRouter } from 'next/router';
import { CategoryTag } from '../../components';
import * as categoryActions from '../../store/category';
import { useSelector } from 'react-redux';

const RightAside = () => {
  const categories = useSelector(categoryActions.selectAllCategories);
  const router = useRouter();

  return (
    <aside className="paddings col-span-3 bg-white">
      {router.pathname === '/store' && (
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <CategoryTag key={category._id} title={category.title} />
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};

export default RightAside;
