import Navbar from "./components/Navbar";
import "./App.scss";
import { useState, useEffect } from 'react';
function App() {

  const characters = [
    {
      name: "John Doe",
      team: "Real Madrid",
      position: "Forward",
      age: 28,
      status: "Active",
    },
    {
      name: "Jane Smith",
      team: "Barcelona",
      position: "Midfielder",
      age: 25,
      status: "Active",
    },
    {
      name: "Mike Johnson",
      team: "Manchester United",
      position: "Defender",
      age: 30,
      status: "Active",
    },
    {
      name: "Sarah Williams",
      team: "Bayern Munich",
      position: "Goalkeeper",
      age: 27,
      status: "Inactive",
    },


  ]
  const olderPlayers = characters.filter((character) => {
    return character.age > 26
  })
  console.log(olderPlayers);

  const activePlayers = characters.filter(
    (character) => character.status == "Active"
  );
  console.log(activePlayers);

  //map

  const allNames = characters.map(
    (character) => character.name);

  console.log(allNames);

  const allPlayersTeam = characters.map((character) => character.team);
  console.log(allPlayersTeam);

  const allAge = characters.map((character) => {
    return character.age
  });
  console.log(allAge)

  const minifiedRecord = characters.map((character) => ({
    name: character.name,
    age: character.age
  }))
  console.log(minifiedRecord);

  //some

  const oneInactiveAtleast = characters.some(
    (character) => character.status == "Inactive"
  );
  console.log(oneInactiveAtleast);

  const olderThan25 = characters.some((character) => character.age > 25);
  console.log(olderThan25);

  //sort

  const sortByAge = characters.sort((a, b) => {
    return a.age - b.age
  });
  console.log(sortByAge, "byAge");


  const byActive = characters.sort((a) => {
    if (a.status == "Active") return -1;
    return 1;
  });
  console.log(byActive);

  const [number, setNumber] = useState(0)

  const addNumber = () => {
    setNumber(number + 5)
  }

  return (
    <>
      <div className="container">
        <Navbar />
        {number}

        <button onClick={addNumber}>Add</button>
      </div>
    </>
  );
}

export default App;
