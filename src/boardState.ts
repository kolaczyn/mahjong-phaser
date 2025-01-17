import { BoardState, PlayerState, Tile, Wind } from "./types.ts";
import { shuffle } from "./utils/shuffle.ts";
import { allTiles } from "./tiles.ts";
import { produce, WritableDraft } from "immer";

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

export const getActivePlayer = (board: BoardState) =>
  board.players.find((x) => x.wind === board.wind)!;

const nextWind = (board: BoardState): Wind => {
  switch (board.wind) {
    case "east":
      return "south";
    case "south":
      return "west";
    case "west":
      return "north";
    case "north":
      return "east";
  }
};

export const discardTile = (
  state: WritableDraft<BoardState>,
  toDiscard: Tile,
) => {
  const activePlayer = getActivePlayer(state);
  console.log(activePlayer);

  activePlayer.hand = activePlayer.hand.filter((x) => x.id !== toDiscard.id);
  activePlayer.discards.push(toDiscard);
};

export const drawTile = (state: WritableDraft<BoardState>) => {
  const activePlayer = getActivePlayer(state);

  // TODO handle empty array
  const pickedTile = state.wall.active.pop()!;

  activePlayer.hand.push(pickedTile);
};

export const finishTurn = (original: BoardState, toDiscard: Tile) =>
  produce(original, (state) => {
    discardTile(state, toDiscard);
    state.wind = nextWind(state);
    drawTile(state);
  });
