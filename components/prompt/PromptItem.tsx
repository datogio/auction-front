import { Dispatch, ReactNode } from 'react';
import { BiErrorCircle } from 'react-icons/bi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import * as promptActions from '../../store/prompt';
import { promptAnimation } from '../../utils/animation';

export type PromptItemProps = prompts.Model;

const colorsMap: Record<PromptItemProps['type'], string> = {
  error: 'bg-red-100 text-red-600 border-red-600',
  notification: 'bg-green-100 text-green-600 border-green-600',
};

const iconsMap: Record<PromptItemProps['type'], ReactNode> = {
  error: <BiErrorCircle />,
  notification: <IoMdNotificationsOutline />,
};

const PromptItem = (props: PromptItemProps) => {
  const dispatch: Dispatch<any> = useDispatch();

  const onTimesClick = () => {
    dispatch(promptActions.remove(props.id));
  };

  return (
    <motion.div
      {...promptAnimation}
      className={`${
        colorsMap[props.type]
      } flex items-center justify-between p-2 rounded shadow-lg border`}
    >
      <div className="flex items-center space-x-2">
        <div className="text-2xl">{iconsMap[props.type]}</div>
        <div className="opacity-60 font-bold">{props.message}</div>
      </div>
      <FaTimes className="cursor-pointer" onClick={onTimesClick} />
    </motion.div>
  );
};

export default PromptItem;
