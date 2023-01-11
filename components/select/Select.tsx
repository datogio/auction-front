import { ChangeEventHandler } from 'react';

export interface SelectProps {
  type: 'Category';
  items: category.Model[];
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
}

const namesMap: Record<SelectProps['type'], string> = {
  Category: 'category',
};

const Select = (props: SelectProps) => {
  return (
    <select
      name={namesMap[props.type]}
      value={props.value}
      onChange={props.onChange}
      className="w-[100%] cursor-pointer text-center p-2 outline-blue-600 bg-gray-200 text-gray-400 text-lg rounded-lg border-2 border-gray-200"
    >
      <option value="" disabled>
        - Select {namesMap[props.type]} -
      </option>
      {props.items.map((item) => (
        <option key={item._id} value={item._id}>
          {item.title}
        </option>
      ))}
    </select>
  );
};

export default Select;
