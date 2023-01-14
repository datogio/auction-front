declare namespace bid {
  interface Model {
    _id: string;
    amount: number;
    listing: string;
    bidder: { _id: string; firstName: string; lastName: string; image: string };
  }
}
