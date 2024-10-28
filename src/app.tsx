import { BoardState, Tile } from "./types.ts";
import { useState } from "preact/hooks";
import { finishTurn, makeInitialBoardState } from "./boardState.ts";

type SetOfTilesProps = {
  title: string;
  tiles: Tile[];
  active?: boolean;
  handleDiscard?: (tile: Tile) => void;
  discards?: Tile[];
};

const SetOfTiles = ({
  title,
  tiles,
  active = false,
  handleDiscard,
  discards,
}: SetOfTilesProps) => {
  const handleClick = (tile: Tile) => {
    if (handleDiscard) {
      handleDiscard(tile);
    }
  };
  return (
    <section style={{ border: active ? "dotted red 2px" : "initial" }}>
      <h2>
        {title} ({tiles.length}) {active ? "Discard tile" : ""}
      </h2>
      {tiles.map((x) => (
        <button
          style={{ marginRight: 6 }}
          title={x.id}
          key={x.id}
          disabled={!active}
          onClick={() => handleClick(x)}
        >
          {x.kind} {x.value}
        </button>
      ))}
      {discards && (
        <section>
          <h3>Discards</h3>
          <div>
            {discards.map((x) => (
              <span key={x.id} title={x.id}>
                {x.kind} {x.value}
              </span>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export const App = () => {
  const [board, setBoard] = useState<BoardState>(makeInitialBoardState);

  return (
    <div>
      <h1>Wind: {board.wind}</h1>
      {board.players.map((x) => (
        <SetOfTiles
          key={x.wind}
          title={x.wind}
          tiles={x.hand}
          active={x.wind === board.wind}
          handleDiscard={(tile) => {
            setBoard(finishTurn(board, tile));
          }}
          discards={x.discards}
        />
      ))}
      <SetOfTiles title="Active wall" tiles={board.wall.active} />
      <SetOfTiles title="Dead wall" tiles={board.wall.dead} />
    </div>
  );
};
