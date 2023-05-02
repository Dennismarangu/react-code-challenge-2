import React from "react";
import "./BotCard.css"

function BotCard({ bot, enlistBot, releaseBot, deleteBot, army }) {
    const { id, name, health, damage, armor, bot_class, catchphrase, avatar_url } = bot;
  
    const handleClick = () => {
      if (!enlistBot) {
        deleteBot(id);
      } else if (army.length < 3 && !army.some((bot) => bot.id === id)) {
        enlistBot(id);
      }
    };

  return (
    <div className="bot-card-container">
      <img src={avatar_url} alt={name} />
      <h3>{name}</h3>
      <ol>
      <p>{`Health: ${health}`}</p>
      <p>{`Damage: ${damage}`}</p>
      <p>{`Armor: ${armor}`}</p>
      <p>{`Bot Class: ${bot_class}`}</p>
      <p>{`Catchphrase: ${catchphrase}`}</p>
      </ol>
      <button onClick={handleClick}>
        {!enlistBot
          ? "x"
          : army.some((bot) => bot.id === id)
          ? "Enlisted"
          : army.length === 3
          ? "Army Full"
          : "Enlist"}
      </button>
    </div>
  );
}

export default BotCard;