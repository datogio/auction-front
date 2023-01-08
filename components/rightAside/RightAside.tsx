import { useRouter } from 'next/router';

const RightAside = () => {
  const router = useRouter();

  return (
    <aside className="paddings col-span-3 bg-white">
      Right Aside {router.pathname}
    </aside>
  );
};

export default RightAside;
