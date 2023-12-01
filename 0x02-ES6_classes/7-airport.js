export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  /**
   * default string description of the class should return the airport
   */
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
