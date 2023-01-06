import Link from 'next/link';
import Image from 'next/image';
import { IdentityDetails } from '../../components';

export interface ListingCardProps {
  href: string;
  image: string;
  title: string;
  details: string;
}

const ListingCard = (props: ListingCardProps) => {
  return (
    <Link href={props.href}>
      <a className="col-span-1 py-2 px-3 bg-white rounded-lg space-y-1 shadow-lg transition duration-200 hover:scale-105">
        <div className="relative h-28 w-[100%] rounded-lg overflow-hidden">
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            alt="Listing Image"
          />
        </div>
        <IdentityDetails headline={props.title} details={props.details} />
      </a>
    </Link>
  );
};

export default ListingCard;
