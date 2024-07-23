import React from 'react'
import PopOver from './PopOver'
import { Link } from 'react-router-dom'

function TableCard({ title, cols }) {
  return (
    <div className='table-card'>
      <div className='card'>
        <div className='card-header'>
          <div className='row'>
            <div className='col-2'>
              <h5>
                <i className='fa-solid fa-table'></i>
              </h5>
            </div>

            <div className='col-10'>
              <h5>{title}</h5>
            </div>
          </div>
        </div>

        <div className='card-body'>
          <div>
            {cols.map((cols, index) => {
              return (
                <p className='mb-2' key={index}>{cols.split("/")[1]}</p>
              )
            })}
          </div>
        </div>

        <div className='card-footer text-end'>
          <Link className='btn btn-primary'>
            <i className='fa-solid fa-eye'></i> View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TableCard