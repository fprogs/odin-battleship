import { Ship } from "../src/ship";

test("Ships initialize with proper initial values", () => {
  const ship = Ship(5);
  expect(ship.length).toBe(5);
  expect(ship.hits).toBe(0);
});

test("Ships keep track of received hits", () => {
  const ship = Ship(5);
  expect(ship.hits).toBe(0);
  ship.hit();
  expect(ship.hits).toBe(1);
  ship.hit();
  expect(ship.hits).toBe(2);
  ship.hit();
  expect(ship.hits).toBe(3);
});

test("Ships sink after taking enough hits", () => {
  const ship = Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

test("Ships cannot take more hits after sinking", () => {
  const ship = Ship(2);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});
