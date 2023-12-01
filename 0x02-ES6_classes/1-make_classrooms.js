import ClassRoom from './0-classroom';

/**
 * Method that instantiates 3 ClassRoom objects
 * returns an array of the specific sizes
 */
export default function initializeRooms() {
  return [19, 20, 34].map((size) => new ClassRoom(size));
}
