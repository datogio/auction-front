import Image from 'next/image';
import { AuctionControlls } from '../../components';

export interface AuctionProps {
  listingId: string;
  image: string;
  initialBidAmount: string;
}

const Auction = (props: AuctionProps) => {
  return (
    <div className="space-y-3 bg-white p-4 rounded-lg shadow-lg">
      <div className="text-center text-xs font-bold">AUCTION</div>
      <div className="relative w-[100%] h-52 rounded-lg overflow-hidden">
        <Image
          src={props.image}
          layout="fill"
          objectFit="cover"
          alt="Listing Image"
        />
      </div>
      <AuctionControlls
        listingId={props.listingId}
        initialBidAmount={props.initialBidAmount}
      />
    </div>
  );
};

export default Auction;
