import React, { useState, useEffect } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data.bots))
      .catch((error) => console.error(error));
      console.log(bots);
  }, [bots]);

  const enlistBot = (id) => {
    const botToEnlist = bots.find((bot) => bot.id === id);
    setArmy([...army, {id: bots.lenght + 1, ...botToEnlist}]);
  };

  const releaseBot = (id) => {
    const updatedArmy = army.filter((bot) => bot.id !== id);
    setArmy(updatedArmy);
  };

  const deleteBot = (id) => {
    fetch(`/http://localhost:3000/bots/${id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((bot) => bot.id !== id));
        setArmy(army.filter((bot) => bot.id !== id));
      })
      .catch((error) => console.error(error));
      console.log(bots);
  };

  return (
    <div>
      <h1>Welcome to Bot Battlr</h1>
      <BotCollection bots={bots} enlistBot={enlistBot} deleteBot={deleteBot} army={army}/>
      <YourBotArmy army={army} releaseBot={releaseBot} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
