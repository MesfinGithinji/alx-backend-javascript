export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  /**
   *  A symbol is a unique and immutable data type that is often used as an identifier
   * for object properties.
   * Unlike strings or numbers, symbols are guaranteed to be unique,
   *  meaning that no two symbols will be the same.
   */
  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
