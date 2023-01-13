import Image from 'next/image';
import { AuctionControlls } from '../../components';

export interface AuctionProps {
  listingId: string;
  image: string;
  initialBidAmount: string;
}

const Auction = (props: AuctionProps) => {
  return (
    <div className="space-y-5 bg-white p-5 rounded-lg shadow-lg">
      <div className="text-center">AUCTION</div>
      <div className="relative w-[100%] h-52">
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
