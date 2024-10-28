import { BoardState, Tile } from "./types.ts";
import { useState } from "preact/hooks";
import { makeInitialBoardState } from "./boardState.ts";

type SetOfTilesProps = {
  title: string;
  tiles: Tile[];
};

const SetOfTiles = ({ title, tiles }: SetOfTilesProps) => {
  return (
    <section>
      <h2>
        {title} ({tiles.length})
      </h2>
      {tiles.map((x) => (
        <span style={{ marginRight: 6 }} title={x.id} key={x.id}>
          {x.kind} {x.value}
        </span>
      ))}
    </section>
  );
};

export const App = () => {
  const [board, _setBoard] = useState<BoardState>(makeInitialBoardState);

  return (
    <div>
      <h1>Wind: {board.wind}</h1>
      {board.players.map((x) => (
        <SetOfTiles key={x.wind} title={x.wind} tiles={x.hand} />
      ))}
      <SetOfTiles title="Active wall" tiles={board.wall.active} />
      <SetOfTiles title="Dead wall" tiles={board.wall.dead} />
    </div>
  );
};
