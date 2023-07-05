import React from "react";

export default function Card({ numberCard, isSelected, setCards, cards }) {
  function toggleClick() {
    let cardsCopy = JSON.parse(JSON.stringify(cards));

    cardsCopy.forEach((card) => {
      if (card.numberCard == numberCard) {
        card.isSelected = !isSelected;
      } else {
        card.isSelected = false;
      }
    });

    setCards(cardsCopy);
  }

  return (
    <>
      <button
          onClick={toggleClick}
          className={`w-32 h-48 p-5 outline-none ${isSelected ? 'bg-teal-700' : 'bg-teal-600'} hover:bg-teal-700 hover:shadow-xl hover:cursor-pointer shadow-lg rounded-lg flex flex-col justify-between items-center ${isSelected && 'mb-10'}`}
        >
          <h1 className="text-xl self-start text-white outline-none select-none">
            {numberCard}
          </h1>
          <h1 className="text-6xl -mt-3 text-white outline-none select-none">
            {numberCard}
          </h1>
          <h1 className="text-xl self-end text-white outline-none select-none">
            {numberCard}
          </h1>
        </button>
    </>
  );
}
