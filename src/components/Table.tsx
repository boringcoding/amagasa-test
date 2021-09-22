import React, { useEffect, useState } from 'react'
import { TablePageData } from './TablePageData'
import { Api } from '../api'
import { Loading } from './Loading'
import { NoData } from './NoData'
import { Error } from './Error'
import { IUser } from '../types/IUser'

export const Table = () => {
  const [pageData, setPageData] = useState<IUser[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [firstNameFilter, setFirstNameFilter] = useState('')
  const [lastNameFilter, setLastNameFilter] = useState('')
  const [filteredPageData, setFilteredPageData] = useState<IUser[]>([])

  useEffect(() => {
    setIsLoading(true)
    Api.getPageData(page)
      .then((data) => {
        setPageData(data)
      })
      .catch((err) => {
        console.error(err)
        setError('Something went wrong. Try refresh the page.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [page])

  useEffect(() => {
    const filtered = pageData.filter((item) => {
      return (
        item.first_name.toLowerCase().includes(firstNameFilter.trim().toLowerCase()) &&
        item.last_name.toLowerCase().includes(lastNameFilter.trim().toLowerCase())
      )
    })
    setFilteredPageData(filtered)
  }, [firstNameFilter, lastNameFilter, pageData])

  const handlePageChange = (value: number) => {
    setPage((prev) => {
			const next = prev + value
      if (next === 0) {
        return 1
      }
      return next
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div>
      <table className="table-auto mx-auto w-full">
        <thead>
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">
              <div>First Name</div>
              <input
                type="text"
                placeholder="Input here for filter by first name"
                className="w-full rounded"
                value={firstNameFilter}
                onChange={(e) => setFirstNameFilter(e.target.value)}
              />
            </th>
            <th className="border p-2">
              <div>Last Name</div>
              <input
                type="text"
                placeholder="Input here for filter by last name"
                className="w-full rounded"
                value={lastNameFilter}
                onChange={(e) => setLastNameFilter(e.target.value)}
              />
            </th>
            <th className="border p-2">Email</th>
          </tr>
        </thead>

        {isLoading ? <Loading /> : <TablePageData data={filteredPageData} />}
      </table>
      {!isLoading && !pageData.length && !error && <NoData />}
      {error && <Error text={error} />}

      {!isLoading && !error && (
        <div className="my-3 flex justify-end">
          <h2 className="text-green-500 font-bold text-center p-2">Page #{page}</h2>
          <button
            className="border-2 rounded-lg border-green-500 font-bold text-green-500 px-4 py-2 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white ml-4"
            onClick={() => handlePageChange(-1)}
          >
            Prev
          </button>
          <button
            className="border-2 rounded-lg border-green-500 font-bold text-green-500 px-4 py-2 transition duration-300 ease-in-out hover:bg-green-500 hover:text-white ml-4"
            onClick={() => handlePageChange(1)}
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
