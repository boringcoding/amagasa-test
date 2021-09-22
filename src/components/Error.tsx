import React, { FC } from 'react'

export const Error: FC<{ text: string }> = ({ text }) => {
  return (
    <>
      <h3 className="text-lg text-red-500 text-center uppercase p-4">{text}</h3>
      <a rel="noreferrer" className="block text-lg text-red-500 text-center underline hover:no-underline" target="_blank" href="https://cors-anywhere.herokuapp.com/">Click here unlock access to proxy</a>
    </>
  )
}
