import React from "react";
import BotCard from "./BotCard";
import "./BotCollection.css"


function BotCollection(props) {
  const { bots, enlistBot, releaseBot, deleteBot, army } = props;

  return (
    <div className="bot-collection-container">
      <h2>All Bots</h2>
{bots && bots.map((bot) => (
   <BotCard
    key={bot.id}
    bot={bot}
    enlistBot={enlistBot}
    releaseBot={releaseBot}
    deleteBot={deleteBot}
    army={army}
  />
))}
    </div>
  );
}

export default BotCollection;