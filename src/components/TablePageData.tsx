import React, { FC } from 'react'
import { IUser } from '../types/IUser'

interface TablePageDataProps {
  data: IUser[]
}

export const TablePageData: FC<TablePageDataProps> = ({ data }) => {
  return (
    <tbody>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="border p-2">{item.id}</td>
          <td className="border p-2">{item.first_name}</td>
          <td className="border p-2">{item.last_name}</td>
          <td className="border p-2">{item.email}</td>
        </tr>
      ))}
    </tbody>
  )
}
