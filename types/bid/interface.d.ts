declare namespace bid {
  interface Model {
    _id: string;
    amount: number;
    listing: string;
    bidder: { firstName: string; lastName: string; image: string };
  }
}
