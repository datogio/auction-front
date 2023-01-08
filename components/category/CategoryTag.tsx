export interface CategoryTagProps {
  active: boolean;
  title: string;
}

const CategoryTag = (props: CategoryTagProps) => {
  return (
    <div
      className={`${
        props.active
          ? 'bg-gray-400 text-white'
          : 'bg-gray-200 cursor-pointer shadow-lg'
      } transition rounded p-2`}
    >
      {props.title}
    </div>
  );
};

export default CategoryTag;
