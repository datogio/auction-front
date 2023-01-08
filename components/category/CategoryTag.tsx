export interface CategoryTagProps {
  title: string;
  active?: boolean;
}

const CategoryTag = (props: CategoryTagProps) => {
  return (
    <div
      className={`${
        props.active
          ? 'bg-gray-400 text-white'
          : 'bg-gray-200 cursor-pointer shadow-lg hover:shadow-xl'
      } transition rounded py-1 px-4`}
    >
      {props.title}
    </div>
  );
};

export default CategoryTag;
