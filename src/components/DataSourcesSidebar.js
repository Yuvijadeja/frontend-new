import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DeleteDSModal from './modal/DeleteDSModal'

function DataSourcesSidebar({ setAlert, setShowAlert }) {
  const [dataSources, setDataSources] = useState([
    {
      id: 1,
      alias: "Data Source 1",
      type: "mysql",
      name: "employees"
    },
    {
      id: 2,
      alias: "Data Source 2",
      type: "postgres",
      name: "sales"
    },
    {
      id: 3,
      alias: "Data Source 3",
      type: "googlesheet",
      name: "mis"
    }
  ])
  const [selectedSource, setSelectedSource] = useState({ id: 0, alias: "" })

  return (
    <div className='sidebar'>
      <div className='container-fluid pt-3 ps-3'>
        <h6 className='mb-4'>Data Sources</h6>

        {dataSources.map((rows, index) => {
          return (
            <div className='ds-item' key={index}>
              <div className='logo'>
                <h2 className='fa-solid fa-database'></h2>
              </div>

              <div className='content'>
                <div className="dropdown">
                  <button type="button" className="dropdown-toggle" data-bs-toggle="dropdown">
                    {rows.alias}
                  </button>
                  <ul className="dropdown-menu">
                    <li><Link
                      to="/workbooks/workbook"
                      state={rows.id}
                      className="dropdown-item"
                    >
                      <i className='fa-solid fa-plus'></i>&nbsp; Workbook
                    </Link></li>
                    <li><Link
                      to=""
                      data-bs-toggle="modal"
                      data-bs-target="#deleteDSModal"
                      className="dropdown-item"
                      onClick={() => setSelectedSource({ id: rows.id, alias: rows.alias })}
                    >
                      <i className='fa-solid fa-trash'></i>&nbsp; Delete Source
                    </Link></li>
                  </ul>
                </div>
                <small>{rows.type} | {rows.name}</small>
              </div>
            </div>
          )
        })}
      </div>

      <DeleteDSModal
        id={selectedSource.id}
        alias={selectedSource.alias}
        setAlert={setAlert}
        setShowAlert={setShowAlert}
      />
    </div>
  )
}

export default DataSourcesSidebar