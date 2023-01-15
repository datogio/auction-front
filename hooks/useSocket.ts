import { useEffect } from 'react';
import type { Dispatch } from 'react';
import { useDispatch } from 'react-redux';
import socket from '../services/socket';

const useSocket = (listingId: string) => {
  const dispatch: Dispatch<any> = useDispatch();

  useEffect(() => {
    const handleDisconnect = () => {
      //   socket.off("create_project");

      socket.disconnect();
    };

    socket.connect();
    socket.emit('join_listing_room', listingId);

    // socket.on("create_project", (project: project.IProject) => {
    //   dispatch(projectActions.create(project));
    // });

    return () => handleDisconnect();
  }, [listingId]);
};

export default useSocket;
