import React from 'react';

export const SmallRecipesCard = ({ imageUrl, title, description }: any) => {
  return (
    <div className="relative max-w-sm rounded shadow-lg cursor-pointer hover:scale-105 transform transition-transform duration-300 ease-in-out">
      <img src={imageUrl} alt={title} className="w-full rounded-lg" />
      <div className="absolute top-36 left-0 w-full h-full p-4">
        <div className="bg-opacity-75 bg-gray-800 p-2 rounded text-white">
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
          <p className="text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};
