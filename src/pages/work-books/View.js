import React, { useState, useEffect } from 'react'
import { MaterialReactTable } from 'material-react-table'
import Tables from '../../components/Tables'

function View() {
  const [tables, setTables] = useState([
    { value: "table1", label: "table1" },
    { value: "table2", label: "table2" },
    { value: "table3", label: "table3" },
  ])
  const [selectedTable, setSeletctedTable] = useState({})
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    setColumns([
      {
        accessorKey: 'id',
        header: 'id'
      },
      {
        accessorKey: 'gender',
        header: 'gender'
      },
      {
        accessorKey: 'age',
        header: 'age'
      },
      {
        accessorKey: 'country',
        header: 'country'
      },
      {
        accessorKey: 'joined',
        header: 'joined'
      },
    ])

    setData([
      { id: 1, name: "Foramba", age: 33, gender: "Female", country: "India", joined: "1/1/2023" },
      { id: 2, name: "Yuvrajsinh", age: 31, gender: "Male", country: "USA", joined: "1/6/2020" },
      { id: 3, name: "Jignaba", age: 29, gender: "Female", country: "UK", joined: "1/10/2019" },
      { id: 4, name: "Maitriba", age: 10, gender: "Female", country: "India", joined: "1/1/2023" },
      { id: 5, name: "Adityarajsinh", age: 5, gender: "Male", country: "India", joined: "1/8/2022" },
      { id: 6, name: "Hardevsinh", age: 25, gender: "Male", country: "India", joined: "1/7/2018" },
      { id: 7, name: "Foramba", age: 33, gender: "Female", country: "India", joined: "1/1/2023" },
      { id: 8, name: "Yuvrajsinh", age: 31, gender: "Male", country: "USA", joined: "1/6/2020" },
      { id: 9, name: "Jignaba", age: 29, gender: "Female", country: "UK", joined: "1/10/2019" },
      { id: 10, name: "Maitriba", age: 10, gender: "Female", country: "India", joined: "1/1/2023" },
    ])

  }, [selectedTable])

  return (
    <div className='view'>
      <div className='statusbar'>
        <div className='tables'>
          {tables.length > 0 &&
            <Tables
              tables={tables}
              setTables={setTables}
              selectedTable={selectedTable}
              setSeletctedTable={setSeletctedTable}
            />}
        </div>
      </div>

      {selectedTable.value &&
        <MaterialReactTable
          columns={columns}
          data={data}
          renderTopToolbarCustomActions={({ table }) => (
            <div>
              <button type='button' className='btn btn-outline-secondary'>
                Export to CSV
              </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <button type='button' className='btn btn-outline-secondary'>
                Export to XLSX
              </button>
            </div>
          )}
        />
      }<br />
    </div>
  )
}

export default View