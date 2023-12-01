export default class HolbertonCourse {
  /**
   * Creates an instance of HolbertonCourse
   * Each object will have the attributes:
   * name(String) of the course
   * length(number) how long will it take
   * students(array of Strings) names of students enrolled
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Getter method for the course name.
   */
  get name() {
    return this._name;
  }

  /**
   * Setter method for the course name.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * Getter method for the course length
   */
  get length() {
    return this._length;
  }

  /**
   * Setter method for the course length
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  /**
   * Getter method for the students enrolled
   */
  get students() {
    return this._students;
  }

  /**
   * Setter method for the students enrolled
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
