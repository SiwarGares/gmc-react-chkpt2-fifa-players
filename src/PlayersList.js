/* // src/PlayersList.js
import React from "react";
import Player from "./Player";
import players from "./players";

// Composant PlayersList
const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          shirtNumber={player.shirtNumber} // Correction de l'erreur de typo
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayersList;
 */
import React from "react";
import Player from "./Player";
import players from "./players";

const PlayersList = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {players.map((player, index) => (
        <Player
          key={index}
          {...player} // Propagation des props
        />
      ))}
    </div>
  );
};

export default PlayersList;
