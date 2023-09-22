import LunchDiningRoundedIcon from '@mui/icons-material/LunchDiningRounded';
import RamenDiningRoundedIcon from '@mui/icons-material/RamenDining';
import LocalPizzaRoundedIcon from '@mui/icons-material/LocalPizzaRounded';
import RiceBowlRoundedIcon from '@mui/icons-material/RiceBowlRounded';

export const CuisineCategory = () => {
  return (
    <>
      <div className="flex flex-row space-x-10 mx-auto">
        <button
          className="flex flex-col items-stretch bg-zinc-700 text-white w-20 h-20 py-4 px-2 rounded-full cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out"
          onClick={() => 'clicked'}
        >
          <LunchDiningRoundedIcon className="self-center w-60 h-60" />
          <p className="text-xs pt-1">American</p>
        </button>
        <button
          className="flex flex-col items-stretch bg-zinc-700 text-white w-20 h-20 py-4 px-2 rounded-full cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out"
          onClick={() => 'clicked'}
        >
          <RamenDiningRoundedIcon className="self-center w-60 h-60" />
          <p className="text-xs pt-1">Japanese</p>
        </button>
        <button
          className="flex flex-col items-stretch bg-zinc-700 text-white w-20 h-20 py-4 px-2 rounded-full cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out"
          onClick={() => 'clicked'}
        >
          <LocalPizzaRoundedIcon className="self-center w-60 h-60" />
          <p className="text-xs pt-1">Italian</p>
        </button>
        <button
          className="flex flex-col items-stretch bg-zinc-700 text-white w-20 h-20 py-4 px-2 rounded-full cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out"
          onClick={() => 'clicked'}
        >
          <RiceBowlRoundedIcon className="self-center w-60 h-60" />
          <p className="text-xs pt-1">Chinese</p>
        </button>
        <button
          className="flex flex-col items-stretch bg-zinc-700 text-white w-20 h-20 py-4 px-2 rounded-full cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out"
          onClick={() => 'clicked'}
        >
          <LunchDiningRoundedIcon className="self-center w-60 h-60" />
          <p className="text-xs pt-1">American</p>
        </button>
      </div>
    </>
  );
};
