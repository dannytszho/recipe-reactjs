import { ReactEventHandler } from "react";

type CuisineButtonProps = {
    cuisine: string;
    onClick: ReactEventHandler<HTMLButtonElement>;

}

export const CuisineButton = ({ cuisine, onClick }: CuisineButtonProps) => {
    return (
        <button
            className='bg-red-500 text-white font-bold py-2 px-4 rounded-sm'
            onClick={()=> 'clicked'}
        >
            {cuisine}
        </button>
    )
}