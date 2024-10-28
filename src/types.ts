type SuitKind = "pin" | "sou" | "man";

type Value = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type SuitTile = {
  id: string;
  kind: SuitKind;
  value: Value;
};

export type Wind = "east" | "south" | "west" | "north";

export type WindTile = {
  id: string;
  kind: "wind";
  value: Wind;
};

type Dragon = "white" | "green" | "red";

export type DragonTile = {
  id: string;
  kind: "dragon";
  value: Dragon;
};

export type Tile = SuitTile | WindTile | DragonTile;

export type PlayerState = {
  hand: Tile[];
  discards: Tile[];
  wind: Wind;
  points: number;
};

export type BoardState = {
  players: PlayerState[];
  wind: Wind;
  wall: {
    active: Tile[];
    dead: Tile[];
  };
};
