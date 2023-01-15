const { io } = require('socket.io-client');
import { API_URL } from '../utils/urls';

const socket = io(API_URL, { transports: ['websocket'] });

export default socket;
