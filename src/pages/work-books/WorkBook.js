import React, { useEffect, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
import Tables from '../../components/Tables.js'
import PopOver from '../../components/PopOver.js'
import AddTableModal from '../../components/modal/AddTableModal.js'
import Table from '../../components/Table.js'
import Share from '../../components/modal/Share.js'

function WorkBook() {
  const [setAlert, setShowAlert] = useOutletContext()

  const [tables, setTables] = useState([])
  const [selectedTable, setSeletctedTable] = useState({})
  const [columns, setColumns] = useState([])
  const [data, setData] = useState([])
  const [sharedWith, setSharedWith] = useState([
    { id: 1, email: "yuvijadeja19@gmail.com" },
    { id: 2, email: "adijadeja@gmail.com" },
    { id: 3, email: "jignajadeja19@gmail.com" },
    { id: 4, email: "hardev@gmail.com" },
    { id: 5, email: "foramba@gmail.com" },
    { id: 6, email: "shuaryadepp@gmail.com" },
  ])

  useEffect(() => {
    setColumns([
      {
        name: 'id',
        type: 'number'
      },
      {
        name: 'name',
        type: 'text'
      },
      {
        name: 'gender',
        type: 'text'
      },
      {
        name: 'age',
        type: 'number'
      },
      {
        name: 'country',
        type: 'text'
      },
      {
        name: 'joined',
        type: 'date'
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
    <div className='workbook'>
      <div className='statusbar'>
        <div className='buttons'>
          <button type='button' data-bs-toggle="modal" data-bs-target="#addTableModal">
            <PopOver placement="top" icon="fa fa-plus">
              Add Table
            </PopOver>
          </button>&nbsp;&nbsp;&nbsp;&nbsp;

          <Link to="view">
            <PopOver placement="top" icon="fa fa-table-cells">
              Preview
            </PopOver>
          </Link>&nbsp;&nbsp;&nbsp;&nbsp;
          
          <button type='button' data-bs-toggle="modal" data-bs-target="#share">
            <PopOver placement="top" icon="fa fa-share">
              Share Workbook
            </PopOver>
          </button>
        </div>

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
        <Table
          columns={columns}
          data={data}
          tables={tables}
          setTables={setTables}
          selectedTable={selectedTable}
          setSeletctedTable={setSeletctedTable}
          setAlert={setAlert}
          setShowAlert={setShowAlert}
        />
      }

      <AddTableModal tables={tables} setTables={setTables} />

      <Share sharedWith={sharedWith} setAlert={setAlert} setShowAlert={setShowAlert} />
    </div>
  )
}

export default WorkBook