import { Dispatch, MouseEventHandler } from 'react';
import { useDispatch } from 'react-redux';
import * as categoryActions from '../../store/category';

export interface CategoryTagProps {
  category: category.Model;
  active?: boolean;
}

const CategoryTag = (props: CategoryTagProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(categoryActions.setActive(props.category));
  };

  return (
    <div
      onClick={onClick}
      className={`${
        props.active
          ? 'bg-gray-400 text-white'
          : 'bg-gray-200 cursor-pointer shadow-lg hover:shadow-xl'
      } transition rounded py-1 px-4`}
    >
      {props.category.title}
    </div>
  );
};

export default CategoryTag;
