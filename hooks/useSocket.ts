import { useEffect } from 'react';
import type { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import socket from '../services/socket';
import * as bidActions from '../store/bid';

const useSocket = (listingId: string) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    const handleDisconnect = () => {
      socket.off('place_bid');

      socket.disconnect();
    };

    socket.connect();
    socket.emit('join_listing_room', listingId);

    socket.on('place_bid', (bid: bid.Model) => {
      dispatch(bidActions.add(bid));
    });

    return () => handleDisconnect();
  }, [listingId, dispatch]);
};

export default useSocket;
