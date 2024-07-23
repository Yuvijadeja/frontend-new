import React, { useState } from 'react'
import { Link, useOutletContext } from "react-router-dom"
import { MaterialReactTable } from 'material-react-table'
import { Box } from '@mui/material'
import PopOver from '../../components/PopOver'
import RenameModal from '../../components/modal/RenameModal'
import DeleteModal from '../../components/modal/DeleteModal'

function WorkBooks() {
  const [setAlert, setShowAlert] = useOutletContext()

  const [selectedWorkbook, setSelectedWorkbook] = useState({ id: 0, name: "" })
  
  const columns = [
    {
      accessorKey: "name",
      header: "Name"
    },
    {
      accessorKey: "created_by",
      header: "Creator",
    },
    {
      accessorKey: "last_updated",
      header: "Last Updated"
    }
  ]
  const data = [
    {
      id: 1,
      name: "Workbook 1",
      created_by: "yuvijadeja19@gmail.com",
      last_updated: "16-07-2024 12:00"
    }
  ]

  return (
    <div className='workbooks'>
      <div className='create-new'>
        <h4 className='mb-3'>Create a new workbook</h4>

        <div className='row'>
          <div className='col-2 text-center'>
            <div className='card'>
              <Link to="/data-sources">
                <div className='card-body'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </Link>
            </div>
            <p className='text-start mt-2'>Blank WorkBook</p>
          </div>
        </div>
      </div>

      <div className='recent'>
        <h4>Recent WorkBooks</h4>

        <MaterialReactTable
          columns={columns}
          data={data}
          positionGlobalFilter='left'
          enableColumnActions={false}
          enableRowActions={true}
          renderRowActions={({ row }) => (
            <Box>
              <Link to='workbook' state={row.original.id}>
                <PopOver placement="bottom" icon="fa-solid fa-eye">
                  View
                </PopOver>
              </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Link
                to=''
                className='text-warning'
                data-bs-toggle="modal"
                data-bs-target="#renameModal"
                onClick={() => setSelectedWorkbook({ id: row.original.id, name: row.original.name })}
              >
                <PopOver placement="bottom" icon="fa-solid fa-pen">
                  Rename
                </PopOver>
              </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

              <Link
                to=''
                className='text-danger'
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={() => setSelectedWorkbook({ id: row.original.id, name: row.original.name })}
              >
                <PopOver placement="bottom" icon="fa-solid fa-trash-can">
                  Delete
                </PopOver>
              </Link>
            </Box>
          )}
        />
      </div>

      <RenameModal workbook={selectedWorkbook} setAlert={setAlert} setShowAlert={setShowAlert} />
      <DeleteModal workbook={selectedWorkbook} setAlert={setAlert} setShowAlert={setShowAlert} />
    </div>
  )
}

export default WorkBooks