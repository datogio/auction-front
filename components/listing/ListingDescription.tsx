export interface ListingDescriptionProps {
  description: string;
}

const ListingDescription = (props: ListingDescriptionProps) => {
  return (
    <article className="row-span-2 bg-white rounded-lg shadow-lg p-4 text-sm text-gray-600">
      {props.description}
    </article>
  );
};

export default ListingDescription;
