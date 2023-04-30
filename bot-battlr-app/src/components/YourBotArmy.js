import React from "react";
import BotCard from "./BotCard";
import "./YourBotArmy.css"


function YourBotArmy({ army, releaseBot, deleteBot }) {
  const renderArmy = () => {
    return army.map((bot) => (
      <BotCard key={bot.id} bot={bot} releaseBot={releaseBot} deleteBot={deleteBot} />
    ));
  };


  return (
    <div className="your-bot-army-container">
      <h2>Your Bot Army</h2>
      {army.length === 0 ? <p>You have no enlisted bots</p> : renderArmy()}
    </div>
  );
}

export default YourBotArmy;