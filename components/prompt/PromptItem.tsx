import { Dispatch, ReactNode } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import * as promptActions from '../../store/prompt';

export interface PromptItemProps {
  type: 'error' | 'notification';
  message: string;
  index: number;
}

const colorsMap: Record<PromptItemProps['type'], string> = {
  error: 'bg-red-200',
  notification: 'bg-green-200',
};

const iconsMap: Record<PromptItemProps['type'], ReactNode> = {
  error: <BiErrorCircle />,
  notification: <IoMdNotificationsOutline />,
};

const PromptItem = (props: PromptItemProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onTimesClick = () => {
    dispatch(promptActions.remove(props.index));
  };

  return (
    <div
      className={`${
        colorsMap[props.type]
      } flex items-center justify-between p-2 rounded shadow-lg`}
    >
      <div className="flex items-center space-x-2">
        <div className="text-2xl">{iconsMap[props.type]}</div>
        <div className="opacity-60">{props.message}</div>
      </div>
      <FaTimes className="cursor-pointer" onClick={onTimesClick} />
    </div>
  );
};

export default PromptItem;
