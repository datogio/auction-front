import { ReactNode } from 'react';

export interface PromptListProps {
  children: ReactNode;
}

const PromptList = (props: PromptListProps) => {
  return (
    <div className="space-y-3 w-[30%] fixed z-50 bottom-0 right-0 p-3">
      {props.children}
    </div>
  );
};

export default PromptList;
