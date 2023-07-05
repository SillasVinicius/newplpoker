import React, { useState } from "react";
import Card from "./../Card/Card";

export default function PlanningPoker() {
  const [cards, setCards] = useState([
    { numberCard: 0, isSelected: false },
    { numberCard: 1, isSelected: false },
    { numberCard: 2, isSelected: false },
    { numberCard: 3, isSelected: false },
    { numberCard: 5, isSelected: false },
    { numberCard: 8, isSelected: false },
    { numberCard: 13, isSelected: false },
  ]);

  return (
    <div className="h-screen w-screen p-5 flex flex-col gap-5 justify-between items-center">
      <h1 className="text-3xl mb-10 font-bold">PL Poker</h1>
      <div className="w-2/6 h-60 bg-teal-600 rounded-xl">
        <div></div>
      </div>
      <div className="w-full flex gap-4 justify-center items-end flex-wrap">
        {cards.map((card, index) => (
          <Card
            key={index}
            numberCard={card.numberCard}
            isSelected={card.isSelected}
            setCards={setCards}
            cards={cards}
          />
        ))}
      </div>
    </div>
  );
}
