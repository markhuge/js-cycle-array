function Cycle () { return this.cycle; }

Cycle.prototype.index = 0;

Cycle.prototype.cycle = function (list) {
  if (this.index < list.length) this.index++;
  else this.index = 1
  return list[this.index -1];
}

module.exports = Cycle;
