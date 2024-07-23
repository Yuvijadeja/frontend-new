import React, { useEffect, useState } from 'react'
import PopOver from './PopOver'
import { Link } from 'react-router-dom'
import ColumnFilterModal from './modal/ColumnFilterModal'
import DeleteTableModal from './modal/DeleteTableModal'

function Table({ columns, data, tables, setTables, selectedTable, setSeletctedTable, setAlert, setShowAlert }) {
  const [columnsVisible, setColumnsVisible] = useState([])
  const [filters, setFilters] = useState({})
  const [selectedColum, setSelectedColumn] = useState("")

  const onColumnVisiblityChange = e => {
    if (e.target.checked) {
      setColumnsVisible([...columnsVisible, e.target.value])
    } else {
      setColumnsVisible(columnsVisible.filter(column => column !== e.target.value))
    }
  }

  const handleClick = () => {
    if (columnsVisible.length > 0) {
      console.log(selectedTable)
      console.log(columnsVisible)
      console.log(filters)
    } else {
      setAlert({
        type: 'warning',
        message: "Atleast one column should be selected!"
      })
      setShowAlert(true)
    }
  }

  useEffect(() => {
    setColumnsVisible([])
  }, [selectedTable])

  return (
    <div className='table-responsive'>
      <div className='tools'>
        <div className="dropdown">
          <button type="button" data-bs-toggle="dropdown">
            <PopOver placement="bottom" icon="fa-solid fa-bars">
              Toggle Columns
            </PopOver>
          </button>
          <ul className="dropdown-menu">
            {columns.map((column, index) => {
              return (
                <li key={index}>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={column.name}
                      name={column.name}
                      value={column.name}
                      onChange={onColumnVisiblityChange}
                    />
                    <label className="form-check-label" htmlFor={column.name}>
                      {column.name}
                    </label>
                  </div>
                </li>
              )
            })}
          </ul>

          <button type="button" onClick={handleClick}>
            <PopOver placement="bottom" icon="fa-solid fa-save">
              Save
            </PopOver>
          </button>

          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteTableModal"
          >
            <PopOver placement="bottom" icon="fa-solid fa-trash-can">
              Delete
            </PopOver>
          </button>
        </div>
      </div>

      <table className='table'>
        <thead>
          <tr>
            {columnsVisible.map((col, index) => (
              <th key={index}>
                {col}&nbsp;&nbsp;&nbsp;
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#columnFilterModal"
                  onClick={() => setSelectedColumn(columns.find(column => column.name == col))}
                >
                  <i className='fa-solid fa-filter text-secondary'></i>
                </Link>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columnsVisible.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <ColumnFilterModal
        column={selectedColum}
        filters={filters}
        setFilters={setFilters}
        setAlert={setAlert}
        setShowAlert={setShowAlert}
      />

      <DeleteTableModal
        tables={tables}
        setTables={setTables}
        selectedTable={selectedTable}
        setSeletctedTable={setSeletctedTable}
      />
    </div>
  )
}

export default Table