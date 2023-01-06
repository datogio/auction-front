import Link from 'next/link';

export interface ListingCardProps {
  href: string;
}

const ListingCard = (props: ListingCardProps) => {
  return (
    <Link href={props.href}>
      <a>Listing Card</a>
    </Link>
  );
};

export default ListingCard;
