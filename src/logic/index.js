export default class Logic {
  constructor(arr, player, winner, row, finished) {
    this.arr = arr;
    this.player = player;
    this.winner = winner;
    this.row = row;
    this.finished = finished;
  }

  getFinshed() {
    return this.finished;
  }

  getRow() {
    return this.row;
  }

  getWinner() {
    return this.winner;
  }

  getArray() {
    return this.arr;
  }

  getPlayer() {
    return this.player;
  }

  nextPlayer() {
    this.player = this.player === 1 ? 2 : 1;
  }

  move(position) {
    if (this.arr[position] === 0) {
      this.arr[position] = this.player;
      if (this.checkAll(this.arr, position)) {
        this.winner = this.player;
        this.finished = true;
      }
      console.log(this.arr.find((item) => item === 0));
      if (this.arr.find((item) => item === 0) !== 0) this.finished = true;
      this.nextPlayer();
    }
    return this.copy();
  }

  checkAll(array, position) {
    console.log(this.check(array, position, 3));
    console.log(this.vertical(array, position));
    console.log(this.diagonal(array));
    return (
      this.check(array, position, 3) ||
      this.vertical(array) ||
      this.diagonal(array)
    );
  }
  vertical(array) {
    var result = false;
    if (array[0] === array[1] && array[0] === array[2] && array[0] !== 0)
      result = true;
    if (array[3] === array[4] && array[3] === array[5] && array[3] !== 0)
      result = true;
    if (array[6] === array[7] && array[6] === array[8] && array[6] !== 0)
      result = true;

    return result;
  }

  diagonal(array) {
    var result = false;
    if (array[0] === array[4] && array[0] === array[8] && array[0] !== 0)
      result = true;
    if (array[2] === array[4] && array[2] === array[6] && array[2] !== 0)
      result = true;
    return result;
  }

  check(array, position, anzahl) {
    var newPosition = position + anzahl;
    var newPosition2 = position - anzahl;
    var counter = 1;

    while (newPosition <= 8) {
      if (array[position] !== array[newPosition]) {
        break;
      }
      newPosition += anzahl;
      counter += 1;
    }

    while (newPosition2 >= 0) {
      if (array[position] !== array[newPosition2]) {
        break;
      }
      newPosition2 -= anzahl;
      counter += 1;
    }

    return counter >= 3;
  }

  reset() {
    this.player = 1;
    this.arr = Array(9).fill(0);
  }

  copy() {
    return new Logic(
      this.arr,
      this.player,
      this.winner,
      this.row,
      this.finished
    );
  }
}
