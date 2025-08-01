import React from 'react';

const ListofPlayers  = () =>
{
      const players= [
          { name: 'Rohit', score: 95 },
          { name: 'Virat', score: 88 },
          { name: 'Rahul', score: 67 },
          { name: 'Jadeja', score: 55 },
          { name: 'Shami', score: 75 },
          { name: 'Pant', score: 48 },
          { name: 'Hardik', score: 90 },
          { name: 'Ashwin', score: 35 },
          { name: 'Bumrah', score: 85 },
          { name: 'Gill', score: 76 },
          { name: 'Surya', score: 60 },
      ];

      const filtered = players.filter(players => players.score > 70);

      return (
          <div> 
                 <h2>All Players</h2>
                 <ul>
                          {players.map((player,index) =>(
                              <li key = {index}>{player.name} - {player.score}</li>
                          ))} 
                 </ul>   

                 <h3>Players with Score Below 70</h3>
                 <ul>
                    {filtered.map((player, index) =>(
                              <li key= {index}>{player.name} - {player.score}</li>
                    ))}
                 </ul>
          </div>
      );
};

export default ListofPlayers;