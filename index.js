class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBonds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length === 0) throw new Error("EmptySortedList");
    return this.items[this.length - 1];
  }

  min() {
    if (this.length === 0) throw new Error("Empty SortedList");
    return this.items[0];
  }

  sum() {
    const sum = this.items.reduce((a, b) => {
      return a + b;
    }, 0);
    return sum;
  }

  avg() {
    if (this.length === 0) throw new Error("Empty SortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
