import { Button } from '../button/Button.stories';

export interface ConfirmProps {
  onYesClick: () => void;
  onNoClick: () => void;
}

const Confirm = (props: ConfirmProps) => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="col-span-1">
        <Button
          color="blue"
          icon="yes"
          value="Yes"
          onClick={props.onYesClick}
        />
      </div>
      <div className="col-span-1">
        <Button color="white" icon="no" value="No" onClick={props.onNoClick} />
      </div>
    </div>
  );
};

export default Confirm;
