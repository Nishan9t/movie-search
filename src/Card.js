import React from 'react'

export default function Card({data}) {
  return (
    <div className='flex flex-cols flex-wrap p-4 justify-center'>
    {data.map((movie, index) => (
      <div className='text-center border border-black border-2 m-2' key={index}>
        <img className='mx-auto p-2 w-[300px] h-[450px] ' src={movie.Poster} alt="movie"></img>
        <br />
        <h1 className='text-xl font-bold '>{movie.Title}</h1>
        <p>{movie.Year}</p>
      </div>
    ))}
    </div>
  )
}
