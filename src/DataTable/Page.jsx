import React from 'react'

const Page = ({ pageNumber, currentPageNumber, onChange }) => {
  const isActivePage = () =>currentPageNumber === pageNumber

  const renderedPageNumber = () => pageNumber + 1

  const buttonOutline = () => isActivePage() && 'button-outline'

  const click = (event) => {
    event.preventDefault()
    onChange(pageNumber)
  }

  return (
    <li className="page-item mr-1">
      <button className={`page-link ${buttonOutline()}`} onClick={click} >{renderedPageNumber()}</button>
    </li>
  )
}

export default Page
