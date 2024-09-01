import React from "react";
import { useNavigate } from "react-router-dom";

function Cards({ item }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/item/${item.id}`);
  };

  return (
    <div className="mt-4 my-3 p-3">
      <div
        className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border cursor-pointer"
        onClick={handleClick}
      >
        <figure>
          <img src={item.img} alt={item.name} className="object-cover w-full h-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            {item.category}
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
              Buy Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
