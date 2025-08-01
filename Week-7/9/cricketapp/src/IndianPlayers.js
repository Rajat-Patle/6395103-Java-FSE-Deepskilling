import React from 'react';

const IndianPlayers = () => {
  const T20players = ['Rohit', 'Virat', 'Surya', 'Hardik', 'Bumrah'];
  const RanjiTrophyPlayers = ['Pujara', 'Iyer', 'Samson', 'Unadkat', 'Ravi'];

  const allPlayers = [...T20players, ...RanjiTrophyPlayers];

  // Destructure into odd/even team
  const oddTeam = allPlayers.filter((_, index) => index % 2 === 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {allPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Odd Team Players</h3>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
