import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
       <h1 className='text-3xl mb-10 font-bold'>PL Poker</h1>
      <h1 className='text-3xl mb-2 font-bold text-red-600'>Oops!</h1>
      <p className='text-base font-bold text-red-950'>Desculpe, um erro inesperado aconteceu.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}