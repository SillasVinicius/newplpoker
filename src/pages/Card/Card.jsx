import React from "react";

export default function Card({numberCard}) {
  return (
    <div class="w-44 h-64 p-5 outline-none bg-teal-600 hover:bg-teal-700 hover:shadow-xl hover:cursor-pointer shadow-lg rounded-lg flex flex-col justify-between items-center">
      <h1 class="text-xl self-start text-white outline-none select-none">
        { numberCard }
      </h1>
      <h1 class="text-6xl -mt-3 text-white outline-none select-none">
        { numberCard }
      </h1>
      <h1 class="text-xl self-end text-white outline-none select-none">
        { numberCard }
      </h1>
    </div>
  );
}
