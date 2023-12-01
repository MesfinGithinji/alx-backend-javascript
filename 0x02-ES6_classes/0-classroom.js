/**
 * Represents a class room.
 * To allow us allocate the maximum number of students
 * in the class once an instance is instantiated
 */
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}
