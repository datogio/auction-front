import { useRouter } from 'next/router';
import { Categories } from '../../components';

const RightAside = () => {
  const router = useRouter();

  return (
    <aside className="paddings col-span-3 bg-white">
      {router.pathname === '/store' && <Categories />}
    </aside>
  );
};

export default RightAside;
