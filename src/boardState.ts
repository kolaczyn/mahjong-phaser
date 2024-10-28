import { BoardState, PlayerState, Tile, Wind } from "./types.ts";
import { shuffle } from "./utils/shuffle.ts";
import { allTiles } from "./tiles.ts";

const makePlayer = (wind: Wind, hand: Tile[]): PlayerState => ({
  hand,
  discards: [],
  wind,
  points: 25_000,
});

export const makeInitialBoardState = (): BoardState => {
  const tiles = shuffle(allTiles);

  const eastHand = tiles.slice(0, 14);
  const southHand = tiles.slice(14, 27);
  const westHand = tiles.slice(27, 40);
  const northHand = tiles.slice(40, 53);

  const deadWall = tiles.slice(53, 67);
  const activeWall = tiles.slice(67);

  return {
    wind: "east",
    players: [
      makePlayer("east", eastHand),
      makePlayer("south", southHand),
      makePlayer("west", westHand),
      makePlayer("north", northHand),
    ],
    wall: {
      active: activeWall,
      dead: deadWall,
    },
  };
};
