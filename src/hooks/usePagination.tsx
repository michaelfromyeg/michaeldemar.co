import { useState } from 'react'

// Loosely inspired from Material UI

const usePagination = (data: any, itemsPerPage: any, maxItems: any) => {
    const [currentPage, setCurrentPage] = useState(1)

    const currentData = () => {
        const begin = (currentPage - 1) * itemsPerPage
        const end = begin + itemsPerPage
        return data.slice(begin, end)
    }

    const next = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxItems))
    }

    const prev = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1))
    }

    const jump = (page: any) => {
        const pageNumber = Math.max(1, page)
        setCurrentPage(Math.min(pageNumber, maxItems))
    }

    return { next, prev, jump, currentData, currentPage, maxItems }
}

export default usePagination
