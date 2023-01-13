import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, Button, AuthTitle } from '../../components';
import { motion } from 'framer-motion';
import { authAnimation } from '../../utils/animation';
import * as categoryActions from '../../store/category';
import * as promptActions from '../../store/prompt';
import * as userActions from '../../store/user';
import * as listingActions from '../../store/listing';

interface AddListingProps {
  deactivateOverlay: () => void;
}

const AddListing = (props: AddListingProps) => {
  const dispatch: Dispatch<any> = useDispatch();
  const user = useSelector(userActions.selectUser);
  const categories = useSelector(categoryActions.selectAllCategories);
  const [inputs, setInputs] = useState<{
    listingTitle: string;
    listingDescription: string;
    startingPrice: string;
    category: string;
  }>({
    listingTitle: '',
    listingDescription: '',
    startingPrice: '',
    category: '',
  });
  const [images, setImages] = useState<FileList | undefined | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onImageChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setImages(event.target.files);
  };

  const onSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setInputs((prev) => ({ ...prev, category: event.target.value }));
  };

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (!inputs.listingTitle)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Listing title is required',
        })
      );
    if (!inputs.listingDescription)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Listing description is required',
        })
      );
    if (!inputs.startingPrice)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Listing starting price is required',
        })
      );
    if (!images)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Listing image is required',
        })
      );
    if (!inputs.category)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Select listing category',
        })
      );

    setIsButtonDisabled(true);
    user &&
      dispatch(
        listingActions.createListing({
          title: inputs.listingTitle,
          description: inputs.listingDescription,
          startingPrice: inputs.startingPrice,
          categoryId: inputs.category,
          listingImage: images[0],
          owner: user,
          setInputs,
          setImages,
          deactivateOverlay: props.deactivateOverlay,
        })
      );
  };

  return (
    <motion.div {...authAnimation} className="space-y-5">
      <AuthTitle title="New Listing" />
      <form onSubmit={(event) => event.preventDefault()} className="form">
        <Input
          focus="on"
          name="listingTitle"
          value={inputs.listingTitle}
          onChange={onInputChange}
        />
        <Input
          focus="off"
          name="listingDescription"
          value={inputs.listingDescription}
          onChange={onInputChange}
        />
        <Input
          focus="off"
          name="startingPrice"
          value={inputs.startingPrice}
          onChange={onInputChange}
        />
        <Input
          focus="off"
          name="image"
          imagename={images?.length ? images[0].name : 'Upload Image'}
          onChange={onImageChange}
        />
        <Select
          value={inputs.category}
          type="Category"
          items={categories}
          onChange={onSelectChange}
        />
        <Button
          icon="none"
          value="Save"
          onClick={onButtonClick}
          disabled={isButtonDisabled}
        />
      </form>
    </motion.div>
  );
};

export default AddListing;
