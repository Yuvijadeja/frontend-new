import React from 'react'
import DataSourcesSidebar from '../../components/DataSourcesSidebar'
import { Link, useOutletContext } from 'react-router-dom'
import MySqlModal from '../../components/modal/MySqlModal'
import PostgresModal from '../../components/modal/PostgresModal'
import GoogleSheetModal from '../../components/modal/GoogleSheetModal'

function DataSources() {
  const [setAlert, setShowAlert] = useOutletContext()

  return (
    <div className='datasources'>
      <DataSourcesSidebar setAlert={setAlert} setShowAlert={setShowAlert} />

      <div className='container-fluid pt-2' id='ds'>
        <h4 className='pt-3 pb-3'>Add Data Source</h4>

        <div className='row mb-4'>
          <div className='col-3 text-center'>
            <Link to='#' data-bs-toggle="modal" data-bs-target="#mySqlModal">
              <div className='card bg-info'>
                <div className='card-body'>
                  <h1 className='fa-solid fa-database'></h1><hr />
                  <p>My SQL Database</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-3 text-center'>
            <Link to='#' data-bs-toggle="modal" data-bs-target="#postgresModal">
              <div className='card bg-light'>
                <div className='card-body'>
                  <h1 className='fa-solid fa-database'></h1><hr />
                  <p>Postgres SQL Database</p>
                </div>
              </div>
            </Link>
          </div>

          <div className='col-3 text-center'>
            <Link to='#' data-bs-toggle="modal" data-bs-target="#googleSheetModal">
              <div className='card bg-info'>
                <div className='card-body'>
                  <h1 className='fa-solid fa-database'></h1><hr />
                  <p>Google Sheet</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <MySqlModal setAlert={setAlert} setShowAlert={setShowAlert} />
      <PostgresModal setAlert={setAlert} setShowAlert={setShowAlert} />
      <GoogleSheetModal setAlert={setAlert} setShowAlert={setShowAlert} />
    </div>
  )
}

export default DataSources