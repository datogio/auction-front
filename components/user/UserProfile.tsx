import { ChangeEventHandler, Dispatch, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Button, Avatar } from '../../components';
import { motion } from 'framer-motion';
import { authAnimation } from '../../utils/animation';
import * as userActions from '../../store/user';

interface UserProfileProps {
  onSignOutButtonClick: MouseEventHandler<HTMLButtonElement>;
}

const UserProfile = (props: UserProfileProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);

  const onImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!user) return;
    if (!event.target.files) return;
    dispatch(
      userActions.uploadUserImage({
        user: { token: user?.token, id: user?.id },
        image: event.target.files[0],
      })
    );
  };

  return (
    <motion.div
      {...authAnimation}
      className="w-[94%] md:w-[30%] space-y-10 flex flex-col items-center"
    >
      {user && (
        <Avatar
          firstName={user?.firstName}
          lastName={user?.lastName}
          image={user?.image}
          size="lg"
        />
      )}
      {!user?.image && (
        <form
          onSubmit={(event) => event.preventDefault()}
          className="form w-[100%]"
        >
          <Input
            icon="none"
            focus="off"
            name="image"
            imagename={'Upload Image'}
            onChange={onImageUpload}
          />
        </form>
      )}
      <Button
        color="white"
        icon="none"
        value="Sign Out"
        onClick={props.onSignOutButtonClick}
      />
    </motion.div>
  );
};

export default UserProfile;
