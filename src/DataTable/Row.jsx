import React from 'react'

const Row = ({row}) => (
  <tr>
    <td>
      <a href={row.edit_path} className="block">
        {row.name1}
      </a>
      <small>{row.email}</small>
    </td>
  </tr>
)


export default Row
