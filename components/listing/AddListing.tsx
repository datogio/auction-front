import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Input, Select, Button } from '../../components';
import { motion } from 'framer-motion';
import { authAnimation } from '../../utils/animation';
import * as categoryActions from '../../store/category';
import * as promptActions from '../../store/prompt';

const AddListing = () => {
  const dispatch: Dispatch<any> = useDispatch();
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

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
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
    if (!inputs.category)
      return dispatch(
        promptActions.add({
          id: Math.random(),
          type: 'error',
          message: 'Select listing category',
        })
      );

    setInputs({
      listingTitle: '',
      listingDescription: '',
      startingPrice: '',
      category: '',
    });
  };

  return (
    <motion.form
      {...authAnimation}
      onSubmit={(event) => event.preventDefault()}
      className="form"
    >
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
      <Select type="Category" items={categories} onChange={onSelectChange} />
      <Button icon="none" value="Save" onClick={onButtonClick} />
    </motion.form>
  );
};

export default AddListing;
