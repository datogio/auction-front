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
      <a className="col-span-1 p-2 bg-white rounded-lg space-y-1 shadow-xl transition duration-200 active:shadow-none active:scale-95 hover:scale-105 hover:shadow-2xl">
        <div className="relative h-28 w-[100%] rounded-lg overflow-hidden">
          <Image
            src={props.image}
            layout="fill"
            objectFit="cover"
            alt="Listing Image"
          />
        </div>
        <IdentityDetails
          size="md"
          headline={props.title}
          details={props.details}
        />
      </a>
    </Link>
  );
};

export default ListingCard;
