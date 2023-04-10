const Ship = function(length = 2) {
  let hits = 0;

  const hit = function() { 
    if (this.hits >= this.length) return;
    this.hits++;
  };

  const isSunk = function() {
    return this.hits === this.length;
  };

  return {
    length,
    hits,
    hit,
    isSunk
  }
}

export { Ship };