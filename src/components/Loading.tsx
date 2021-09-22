import React from 'react'

export const Loading = () => {
  return (
    <tbody>
			{/* the easiest way to render something n times */}
      {[...Array(10)].map((_, index) => (
        <tr key={index} className="animate-pulse">
          <td className="border p-2">
            <div className="bg-green-200 h-6" />
          </td>
          <td className="border p-2">
            <div className="bg-green-200 h-6" />
          </td>
          <td className="border p-2">
            <div className="bg-green-200 h-6" />
          </td>
          <td className="border p-2">
            <div className="bg-green-200 h-6" />
          </td>
        </tr>
      ))}
    </tbody>
  )
}
