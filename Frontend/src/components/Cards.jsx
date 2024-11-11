import React from 'react'
import cards from "../../public/books.png"

function Cards({item}){
  return (
    <>
    <div className='mt-4 '>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img src={cards} alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:text-pink-500 duration-200">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
